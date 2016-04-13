

var WebsocketServer = require("ws").Server;
var msgUtil = require('./libs/message_util');
var log = require('./libs/logger');
var consts = require("./libs/constants");


//Game usage: sos = [{ ip: "slither-server-kogs.c9users.io", po: 8080, ac: 34, ptm: 121 }]

//Class for the Slither.io Server
function SlitherServer() {

  this.wss = new WebsocketServer({
    port: process.env.PORT,
    path: '/slither'
  });
  
  log.info("Slither.io Server is running on " + this.wss.options.host + ":" + this.wss.options.port)

  // all clients, which are connected with the socket server
  this.clients = [];
  this.clientCounter = 0;


  var self = this;

  //new connection
  this.wss.on('connection', function(ws) {
    ws.binaryType = "arraybuffer";
    self.clientCounter++;

    ws.clientId = self.clientCounter;
    log.info("New Client with id: " + ws.clientId + " connected.")

    self.clients[ws.clientId] = ws;
    log.debug("Send packet: InitialPacket");
    self.sendToClient(new InitialPacket(), ws.clientId);
    

    //a new mesage from a client comes in
    ws.on('message', function(message) {
      var data = new Uint8Array(message);
      log.printArrayError(true, data);
      if (data.byteLength == 1) {
        var value = msgUtil.readInt8(0, data);

        if (value <= 250) {
          //0-250 == direction where snake is going
          log.debug("Snake with id:" + ws.clientId + " goes to direction: " + value);
        }
        else if (value == 253) {
          //snake is in speed mode
          log.debug("Snake with id:" + ws.clientId + " goes in speed mode");
        }
        else if (value == 254) {
          //snake goes back in normal mode
          log.debug("Snake with id:" + ws.clientId + " goes in normal mode");
        }
        else if (value == 251) {
          log.debug("Client with id: " + ws.clientId + " sends ping");
          self.sendToClient(new PongPacket(), ws.clientId);
        }

      }
      else {

        var firstByte = msgUtil.readInt8(0, data);
        var secondByte = msgUtil.readInt8(1, data);
        var packetType = msgUtil.readInt8(2, data);

        log.debug("recived msg from client " + ws.clientId);
        log.printArrayDebug(true, data);
        if (firstByte == 115 && secondByte == 5) { //start a new game. set username
          var username = msgUtil.readString(3, data, data.byteLength);
          ws.username = username;
          log.debug("Client sends username " + ws.clientId + " " + username);
          //send to all
          self.sendToAll(new NewSnakePacket(ws.clientId, username));
          self.sendToClient(new GlobalHighScorePacket(),ws.clientId);
          self.sendToClient(new GPacket(ws.clientId,28907,21136), ws.clientId);

        }
        else if (firstByte == 109) {
          log.info("setAcceleration " + secondByte);
        }
        else {
          log.error("msg from Client " + ws.clientId + " eror parsing:");
          log.printArrayError(true, data);

        }

      }
    });

    ws.on('close', function closeSocket(client) {
      log.info("connection closed " + ws.clientId);
      delete self.clients[ws.clientId];
    });

    ws.on('error', function socketError() {
      log.error("connection error");
    });

  });


  //sends a message to all clients
  this.sendToAll = function(message) {
    var buffer = message.toBuffer();
    if (log.isDebugEnalbed()) {
      log.debug("Send to all");
      log.printArrayDebug(false, buffer);
    }
    this.clients.forEach(function(client) {
      client.send(buffer);

    });
  };

  this.sendToClient = function(message, id) {
    var buffer = message.toBuffer();
    if (log.isDebugEnalbed()) {
      log.debug("Send to Client with id:" + id);
      log.printArrayDebug(false, buffer);
    }
    this.clients[id].send(buffer);
  };
}


//run!
SlitherServer();



//packets

//the initial packet is sending when a client connects to the server
function InitialPacket() {
  this.unknown1 = 0;
  this.unknown2 = 0;
  this.packetType = consts.packetTypes.a;
  this.gameRadius = /*21600; for test changed*/ 216000;
  this.c = 411;
  this.sector_size = 480;
  this.sector_count_along_edge = 130;
  this.spangdv = 4.8 * 10;
  //nsp is propably the nood speed
  this.nsp1 = 4.25 * 100;
  this.nsp2 = 0.5 * 100;
  this.nsp3 = 12 * 100;
  this.mamu = 0.033 * 1E3;
  this.mamu2 = 0.028 * 1E3;
  this.cst = 0.43 * 1E3;
  this.protocol_version = 6;
}

InitialPacket.prototype.toBuffer = function() {
  var arr = new Uint8Array(26)
  var b = 0;
  b+= msgUtil.putInt8(b, arr, 0);
  b+= msgUtil.putInt8(b, arr, 0);
  b+= msgUtil.putInt8(b, arr, this.packetType);
  b+= msgUtil.putInt24(b, arr, this.gameRadius);
  b+= msgUtil.putInt16(b, arr, this.c);
  b+= msgUtil.putInt16(b, arr, this.sector_size);
  b+= msgUtil.putInt16(b, arr, this.sector_count_along_edge);
  b+= msgUtil.putInt8(b, arr, this.spangdv);
  b+= msgUtil.putInt16(b, arr, this.nsp1);
  b+= msgUtil.putInt16(b, arr, this.nsp2);
  b+= msgUtil.putInt16(b, arr, this.nsp3);
  b+= msgUtil.putInt16(b, arr, this.mamu);
  b+= msgUtil.putInt16(b, arr, this.mamu2);
  b+= msgUtil.putInt16(b, arr, this.cst);
  b+= msgUtil.putInt8(b, arr, this.protocol_version);
  return arr;
}


function NewSnakePacket(id, username) {
 this.unknown1 = 0;
 this.unknown2 = 0;
 this.packetType = consts.packetTypes.s;
 this.snakeId = id;
 this.D = 4.9972149810042685 / Math.PI * consts.INT24MAX; //some random float value 9.48109
 this.x = 4.9972149810042685  / Math.PI * consts.INT24MAX; //always same as D
 this.speed =  5.76 * 1E3;
 this.H = 0.028860630325116536 * consts.INT24MAX; //always very close to 0. idk what it is
 this.skin = 20;
 this.xPos = 28907.6 * 5;
 this.yPos = 21137.4 * 5;
 this.name = username;
 this.xPosHead = 28907.3 * 5;
 this.yPosHead = 21136.8 * 5;
 this.parts = [
   { x:1,y:2},
   { x:3,y:4}
   ];
}
NewSnakePacket.prototype.toBuffer = function() {
  var nameLength = this.name.length;
  var partsByteLength = this.parts.length * 2;

  var arr = new Uint8Array(27 + nameLength + partsByteLength * 2);
  var b = 0;

  b += msgUtil.putInt8(b, arr, 0);
  b += msgUtil.putInt8(b, arr, 0);
  b += msgUtil.putInt8(b, arr, this.packetType);
  b += msgUtil.putInt16(b, arr, this.snakeId);
  b += msgUtil.putInt24(b, arr, this.D);
  b += msgUtil.putInt8(b, arr, 0);
  b += msgUtil.putInt24(b, arr, this.x);
  b += msgUtil.putInt16(b, arr, this.speed);
  b += msgUtil.putInt24(b, arr, this.H);
  b += msgUtil.putInt8(b, arr, this.skin);
  b += msgUtil.putInt24(b, arr, this.xPos);
  b += msgUtil.putInt24(b, arr, this.yPos);
  b += msgUtil.putInt8(b, arr, nameLength); //b = 21

  msgUtil.putString(b, arr, this.name); //b=22
  var index = b + nameLength; //index = 22 + 7 -1 = 28
  msgUtil.putInt16(index, arr, this.xPosHead); //hier sind wir in byte 28
  msgUtil.putInt16(index + 3, arr, this.yPosHead); //hier in 31
  index += 6; //index = 37

  //das geht 2 mal durch
  for (var i = 0; i < this.parts.length; i++) {
    msgUtil.putInt8(index, arr, this.parts[i].x); //das wird auf 37 geschrieben //auf 39
    msgUtil.putInt8(index + 1, arr, this.parts[i].y); // das auf 38 //auf 40
    index += 2;//index = 39
  }
  
  
  //[0,0,     115,       0,1,   255,255,255,   0,   255,255,255,    22,128,   7,99,105,   20,    2,52,154,   1,156,215,        7,        99, 105, 114, 99, 97, 57, 52,   255,255,0,    255,255,0,     1,       2,     3,      4]
  //_______   ____       ___     ___________  ____   ____________   ______   __________  _____   _________   __________     __________   __  ____ ____ ___ __  __  __    __________    _________    ______  ______  ______  ______
  //Unknown packetType  snakeID      D        empty       x         speed         H       skin     xos           yPos       nameLength    c    i    r   c   a   9   4      xPosHead     yPosHead    part1X  part1Y  part2X  part2Y
  //0 1        2          3           4        5        6  7  8     9  10     11  12  13  14    15  16  17  18 19 20           21         22  23   23   24  25  26  27   28  29  30     31 32 33    34  35  36 37 
  //am richtigen server
  //0 0       115      232 129    235 132 70     48    235 132 70     22 158    0 0 0     19     1 247 33     1 208 243        4         116 101 115 116                  1 246 105      1209 88     200 86 
  //[0, 0,    115, 168, 202,    100, 92, 158,  48,     100, 92, 158,  22, 158,  0, 0, 0,  19,    1,114,150,   2,168,130,       4,        116,101,115,116,                 1, 115, 57,    2,167,254,  61, 179]
  
  return arr;
}
function GlobalHighScorePacket() {
  //type  = "m"
  this.packetType = consts.packetTypes.m;
  this.I = 462;//VALUE
  this.H = 0.580671702663404 *  consts.INT24MAX; //VALUE??
  
  // C = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
  //C must be C > 0 (C is the Snake lenght)
  
  this.text1  = "www.TheHardCoders.de";
  this.text2  = "Private Slither.io Server By The Hard Coders";
  
}
GlobalHighScorePacket.prototype.toBuffer = function() {
  
  var arr = new Uint8Array(10 + this.text1.length + this.text2.length);
  var b = 0;

  b += msgUtil.putInt8(b, arr, 0);
  b += msgUtil.putInt8(b, arr, 0);
  b += msgUtil.putInt8(b, arr, this.packetType);
  b += msgUtil.putInt24(b,arr,this.I);
  b += msgUtil.putInt24(b,arr,this.H);
  b += msgUtil.putInt8(b, arr, this.text1.length);
  b += msgUtil.putString(b, arr, this.text1);
  b += msgUtil.putString(b, arr, this.text2);

  return arr;
}

function GPacket(id,x,y){
  this.packetType = consts.packetTypes.g;
  this.x = x;
  this.y = y;
}
GPacket.prototype.toBuffer = function(){
  var arr = new Uint8Array(9);
  var b = 0;
  b += msgUtil.putInt8(b, arr, 0);
  b += msgUtil.putInt8(b, arr, 0);
  b += msgUtil.putInt8(b, arr, this.packetType);
  b += msgUtil.putInt24(b,arr, this.x);
  b += msgUtil.putInt24(b,arr, this.y);
  return arr;
}



function PongPacket() {
  this.packetType = consts.packetTypes.p;
}
PongPacket.prototype.toBuffer = function() {
  var arr = new Uint8Array(3);
  msgUtil.putInt8(3, arr, this.packetType);
  return arr;
}


function SetUsernamePacket(u1, u2, username) {
  this.unknown1 = u1;
  this.unknown2 = u2;
  this.packetType = 97;
  this.username = "";
}




