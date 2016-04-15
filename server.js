/*  
 * Class:         SlitherServer
 * Description:   This is the base class for the slither server. All incoming and outgoing packets will be handled here.
 * Created:       13.04.2016
 * Last change:   13´4.04.2016
 * Collaborators: circa94, Kogs
 */

//sos = [{ ip: "jslither-circa94.c9users.io", po: 8080, ac: 34, ptm: 121 } ]

var WebsocketServer = require("ws").Server;
var async = require("async");
var msgUtil = require('./utils/message_util');
var mathUtils = require("./utils/mathUtils");
var consts = require("./utils/constants");
var log = require('./utils/logging/logger');
var Packets = require("./packets/packets");
var Entities = require("./entities/entities");
var gameUtils = require("./utils/gameUtils");

function SlitherServer() {

  this.wss = new WebsocketServer({
    port: process.env.PORT,
    path: '/slither'
  });

  log.info("Slither.io Server is running on " + this.wss.options.host + ":" + this.wss.options.port);

  this.clients = [];
  this.foods = [];
  this.clientCounter = 0;
  var self = this;

  //create some food for testing
  //in future, this should make some kind of task, which is generating new food
  //currently all foods are sending. later we should only send the food in players range
  // gameUtils.createRandomFood(100, self.foods, 28500, 29000, 20600, 21300, 35, 70);

  log.info("UpdatePositionTask is starting")

  //A new client connects to the server.
  this.wss.on('connection', function(ws) {
    ws.binaryType = "arraybuffer";
    self.clientCounter++;
    ws.clientId = self.clientCounter;
    self.clients[ws.clientId] = ws;

    log.info("New Client with id: " + ws.clientId + " connected.");
    log.debug("Send packet: InitialPacket");
    self.sendToClient(new Packets.InitialPacket(), ws.clientId);

    //The server recieves a new message from the client
    ws.on('message', function(message) {
      var data = new Uint8Array(message);

      log.printArrayDebug(true, data);

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
          self.sendToClient(new Packets.PongPacket(), ws.clientId);
        }
        self.sendToAll(new Packets.UpdateDirectionPacket(ws.clientId));
      }
      else {
        var firstByte = msgUtil.readInt8(0, data);
        var secondByte = msgUtil.readInt8(1, data);
        var packetType = msgUtil.readInt8(2, data);

        log.debug("recived msg from client " + ws.clientId);
        log.printArrayDebug(true, data);

        if (firstByte == 115 && secondByte == 5) { //start a new game. set username
          var username = msgUtil.readString(3, data, data.byteLength);

          ws.snake = new Entities.Snake(ws.clientId, username, mathUtils.getRandomInt(0, 26));

          log.info("Client sends username " + ws.clientId + " " + username);
          //setup new snake
          //TODO caculate new spawn position

          self.sendToAll(new Packets.NewSnakePacket(ws.snake));
          self.sendToClient(new Packets.GlobalHighscorePacket(), ws.clientId);
          //self.sendToClient(new Packets.gPacket(ws.clientId, 28907, 21136), ws.clientId);

          //TODO send food here
          self.sendToClient(new Packets.SpawnFoodPacket(self.foods), ws.clientId);

          //todo test this..
          //self.clients.forEach(function(client) {
          //later only send close snakes 
          //  if (client.clientId != ws.clientId) {
          //    self.sendToClient(new Packets.NewSnakePacket(client), ws.clientId);
          //  }
          //});

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

  //Sends a message to all connected clients
  this.sendToAll = function(message) {
    var buffer = message.toBuffer();
    if (log.isDebugEnalbed()) {
      log.debug("Send to all");
      log.printArrayDebug(false, buffer);
    }
    this.clients.forEach(function(client) {
      client.send(buffer);
      log.printArrayDebug(false, buffer);
    });
  };

  //Sends a message to a single client
  this.sendToClient = function(message, id) {
    var buffer = message.toBuffer();
    if (log.isDebugEnalbed()) {
      log.debug("Send to Client with id:" + id);
      log.printArrayDebug(false, buffer);
    }
    this.clients[id].send(buffer);
  };

  this.updatePositionTask = function() {
    log.debug("task");
    //todo test if this brings more speed or is better
    /*  async.forEach(self.clients,function(client){
        
      });*/

    self.clients.forEach(function(client) {
      client.snake.xPos += 1;
      client.snake.yPos -= 1; //TODO x and y calculation
      this.sendToAll(new Packets.UpdatePositionPacket(client.clientId, client.snake.xPos, client.snake.yPos));
    });
    //this.sendToAll(new Packets.UpdatePositionPacket());

  }



  this.loop = function() {
    //log.debug("loop");
    //update all snakes etc
    //check collisions
    //

  };
  //setInterval(this.loop, 1);


  setInterval(this.updatePositionTask, 1000); //when you decraese this value, the client gets the information faster! 

}

//Run the server
SlitherServer();