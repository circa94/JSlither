/*  
 * Class:         SlitherServer
 * Description:   This is the base class for the slither server. All incoming and outgoing packets will be handled here.
 * Created:       13.04.2016
 * Last change:   13.04.2016
 * Collaborators: circa94, Kogs
*/

var WebsocketServer = require("ws").Server;
var msgUtil = require('./utils/message_util');
var log = require('./utils/logging/logger');
var InitialPacket = require("./packets/serverbound/initialPacket").InitialPacket;
var NewSnakePacket = require("./packets/serverbound/newSnakePacket").NewSnakePacket;
var GlobalHighscorePacket = require("./packets/serverbound/globalHighscorePacket").GlobalHighscorePacket;
var GPacket = require("./packets/serverbound/gPacket").GPacket;
var PongPacket= require("./packets/serverbound/pongPacket").PongPacket;

function SlitherServer() {

  this.wss = new WebsocketServer({
    port: process.env.PORT,
    path: '/slither'
  });
  
  log.info("Slither.io Server is running on " + this.wss.options.host + ":" + this.wss.options.port);

  this.clients = [];
  this.clientCounter = 0;
  var self = this;

  //A new client connects to the server.
  this.wss.on('connection', function(ws) {
    ws.binaryType = "arraybuffer";
    self.clientCounter++;
    ws.clientId = self.clientCounter;
    self.clients[ws.clientId] = ws;
    
    log.info("New Client with id: " + ws.clientId + " connected.");
    log.debug("Send packet: InitialPacket");
    self.sendToClient(new InitialPacket(), ws.clientId);

    //The server recieves a new message from the client
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
          
          //
          self.sendToAll(new NewSnakePacket(ws.clientId, username));
          self.sendToClient(new GlobalHighscorePacket(),ws.clientId);
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

  //Sends a message to all connected clients
  this.sendToAll = function(message) {
    var buffer = message.toBuffer();
    if (log.isDebugEnalbed()) {
      log.debug("Send to all");
      log.printArrayDebug(false, buffer);
    }
    this.clients.forEach(function(client) {
      client.send(buffer.toString());
    });
  };

  //Sends a message to a single client
  this.sendToClient = function(message, id) {
      console.log(message);
    var buffer = message.toBuffer();
    if (log.isDebugEnalbed()) {
      log.debug("Send to Client with id:" + id);
      log.printArrayDebug(false, buffer);
    }
    this.clients[id].send(buffer);
  };
}

//Run the server
SlitherServer();