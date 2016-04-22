/*  
 * Class:         SlitherServer
 * Description:   This is the base class for the slither server. All incoming and outgoing packets will be handled here.
 * Created:       13.04.2016
 * Last change:   19.04.2016
 * Collaborators: circa94, Kogs
 */

//sos = [{ ip: "jslither-circa94.c9users.io", po: 8080, ac: 34, ptm: 121 } ]

var WebsocketServer = require("ws").Server;
var async = require("async");
var fs = require('fs');
var msgUtil = require('./utils/message_util');
var mathUtils = require("./utils/mathUtils");
var consts = require("./utils/constants");
var log = require('./utils/logging/logger');
var Packets = require("./packets/packets");
var Entities = require("./entities/entities");
var gameUtils = require("./utils/gameUtils");
var settings = require("./utils/settings");


function SlitherServer() {

  console.log("    __ _____ _ _ _   _              _____                     ");
  console.log(" __|  |   __| |_| |_| |_ ___ ___   |   __|___ ___ _ _ ___ ___ ");
  console.log("|  |  |__   | | |  _|   | -_|  _|  |__   | -_|  _| | | -_|  _|");
  console.log("|_____|_____|_|_|_| |_|_|___|_|    |_____|___|_|  \\_/|___|_|  ");
  console.log("");
  console.log("www.TheHardCoders.de");
  console.log("");


  log.setDebug(settings.readSetting("debug", false));
  log.debug("starting in Debug mode");

  // 12:43 PM Good night. I finish tomorrow
  //var webProxy = (settings.readSetting("protocol","ws") == 'wss' ? require("https") : require("http") );

  this.wss = new WebsocketServer({
    host: settings.readSetting("host", "0.0.0.0"),
    port: settings.readSetting("port", 8080),
    path: '/slither'
  });

  log.info("Slither.io Server is running on " + this.wss.options.host + ":" + this.wss.options.port);

  this.clients = [];
  this.foods = [];
  this.clientCounter = 0;
  var self = this;


this.wss.on("error",function(e){
  log.error("Failed to run WebsocketServer (Make sure your port is not used)");
  log.error(e);
});


  //create some food for testing
  //in future, this should make some kind of task, which is generating new food
  //currently all foods are sending. later we should only send the food in players range
  // gameUtils.createRandomFood(100, self.foods, 28500, 29000, 20600, 21300, 35, 70);

  log.info("UpdatePositionTask is starting");

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
          var degrees = value * 1.44;
          //var oldDegrees = ws.snake.direction.angle;
          //var degreesDistance =  mathUtils.getDegreesDistance(oldDegrees,degrees);
      

          var radians = degrees * (Math.PI / 180);

          var speed = 1;

          var xMove = Math.cos(radians) + 1;
          var yMove = Math.sin(radians) + 1;

          ws.snake.direction.x = xMove * 127 * speed;
          ws.snake.direction.y = yMove * 127 * speed;
          ws.snake.direction.angle = degrees;

        }
        else if (value == 252) {

          console.log("WTF: " + value);

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
          self.updateClient(ws);

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
          var skin = msgUtil.readInt8(2, data);// Set Skin

          ws.snake = new Entities.Snake(ws.clientId, username, skin);


          log.info("Client sends username " + ws.clientId + " " + username);
          //setup new snake
          //TODO caculate new spawn position

          self.sendToAll(new Packets.NewSnakePacket(ws.snake));
          self.sendToClient(new Packets.GlobalHighscorePacket(), ws.clientId);





          self.sendToClient(new Packets.SpawnFoodPacket(self.foods), ws.clientId);


          // self.clients.forEach(function(client) {
          //   //later only send close snakes 
          //   if (client.clientId != ws.clientId) {
          //     self.sendToClient(new Packets.NewSnakePacket(client.snake), ws.clientId);
          //   }
          // });

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
    var client = this.clients[id];
    var lastPing = client.lastMessage;
    client.lastMessage = Date.now();
    var pingDelay = lastPing - client.lastMessage;
    // msgUtil.writeInt16(0,buffer,pingDelay);
    client.send(buffer);
  };




  this.updateClient = function(client) {
    log.debug("UpdateClient");


    if (client.snake != null) {
      self.updateLeaderboard(client.snake)

      if (client.snake.direction != null) {
        client.snake.xPos += client.snake.direction.x;
        client.snake.yPos += client.snake.direction.y;
      }


      //send other snake positions
      self.clients.forEach(function(otherClient) {
        if (otherClient.snake != null) {

          this.sendToClient(new Packets.MovePacket(otherClient.clientId, otherClient.snake.direction.x, otherClient.snake.direction.y), client.clientId);
          //this.sendToClient(new Packets.UpdatePositionPacket(otherClient.clientId, otherClient.snake.xPos, otherClient.snake.yPos), client.clientId);

          //this.sendToClient(new Packets.UpdateDirectionPacket(otherClient), client.clientId);
        }
      });
    }

    self.sendToClient(new Packets.PongPacket(), client.clientId);
  }


  this.updateLeaderboard = function(snake) {
    var rankSorted = [];
    this.clients.forEach(function(client) {
      if (client.snake != null) {
        rankSorted.push({
          snake: client.snake,
          length: client.snake.length
        });
      }
    });

    rankSorted.sort(function(a, b) {
      return a[1] - b[1];
    });

    var rank = rankSorted.indexOf(rankSorted[snake.id - 1]) + 1;

    var topTen = [];
    for (var i = 0; i < 10; i++) {
      if (rankSorted[i] != undefined) {
        topTen.push(rankSorted[i]);
      }
    }
    this.sendToClient(new Packets.LeaderboardPacket(rank, rankSorted.length, topTen), snake.id);
  };

}

//Run the server
SlitherServer();