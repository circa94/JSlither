/*  
 * Class:         NewSnakePacket
 * Description:   Class for creating a new snake on the game field.
 * Created:       13.04.2016
 * Last change:   13.04.2016
 * Collaborators: circa94, Kogs
*/

'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function NewSnakePacket(snake) {
 this.unknown1 = 0;
 this.unknown2 = 0;
 this.packetType = consts.packetTypes.s;
 this.snake = snake;
 this.H = 0.028860630325116536 * consts.INT24MAX; //always very close to 0. idk what it is
}

NewSnakePacket.prototype.toBuffer = function() {
  var nameLength = this.snake.username.length;
  var partsByteLength = this.snake.parts.length * 2;
  //                27 ->basic info           6 ->  header pos
  var arr = new Uint8Array(25 + nameLength + 6 + partsByteLength);
  var b = 0;
  b += msgUtil.writeInt8(b, arr, 0); //1
  b += msgUtil.writeInt8(b, arr, 0); //1
  b += msgUtil.writeInt8(b, arr, this.packetType);//1
  b += msgUtil.writeInt16(b, arr, this.snake.id);//2
  b += msgUtil.writeInt24(b, arr, this.snake.D);//3
  b += msgUtil.writeInt8(b, arr, 0);//2
  b += msgUtil.writeInt24(b, arr, this.snake.x);//3
  b += msgUtil.writeInt16(b, arr, this.snake.speed);//2
  b += msgUtil.writeInt24(b, arr, this.H);//3
  b += msgUtil.writeInt8(b, arr, this.snake.skin);//1
  b += msgUtil.writeInt24(b, arr, this.snake.xPos);//3
  b += msgUtil.writeInt24(b, arr, this.snake.yPos);//3
  b += msgUtil.writeInt8(b, arr, nameLength); //1

  msgUtil.writeString(b, arr, this.snake.username); //+namelength
  var index = b + nameLength; //index = 22 + 7 -1 = 28
  msgUtil.writeInt24(index, arr, this.snake.xPosHead); //hier sind wir in byte 28 //+3
  msgUtil.writeInt24(index + 3, arr, this.snake.yPosHead); //hier in 31 //+3
  index += 6; //index = 37
  //das geht 2 mal durch
  for (var i = 0; i < this.snake.parts.length; i++) {
    msgUtil.writeInt8(index, arr, this.snake.parts[i].x); //das wird auf 37 geschrieben //auf 39
    msgUtil.writeInt8(index + 1, arr, this.snake.parts[i].y); // das auf 38 //auf 40
    index += 2;//index = 39
  }
  
  //[0,0,     115,       0,1,   255,255,255,   0,   255,255,255,    22,128,   7,99,105,   20,    2,52,154,   1,156,215,        7,        99, 105, 114, 99, 97, 57, 52,   255,255,0,    255,255,0,     1,       2,     3,      4]
  //_______   ____       ___     ___________  ____   ____________   ______   __________  _____   _________   __________     __________   __  ____ ____ ___ __  __  __    __________    _________    ______  ______  ______  ______
  //Unknown packetType  snakeID      D        empty       x         speed         H       skin     xos           yPos       nameLength    c    i    r   c   a   9   4      xPosHead     yPosHead    part1X  part1Y  part2X  part2Y
  //0 1        2          3           4        5        6  7  8     9  10     11  12  13  14    15  16  17  18 19 20           21         22  23   23   24  25  26  27   28  29  30     31 32 33    34  35  36 37 
  //am richtigen server
  //0 0       115      232 129    235 132 70     48    235 132 70     22 158    0 0 0     19     1 247 33     1 208 243        4         116 101 115 116                  1 246 105      1209 88     200 86 
  //[0, 0,    115, 168, 202,    100, 92, 158,  48,     100, 92, 158,  22, 158,  0, 0, 0,  19,    1,114,150,   2,168,130,       4,        116,101,115,116,                 1, 115, 57,    2,167,254,  61, 179]
  
  
  
  //[0, 0,   115,    0, 2,     255, 255, 254,   0,    255, 255, 254,    22, 128,    7, 99, 105,    8,    1, 176, 163,   0, 111, 1,    3,    97, 115, 100,    1, 176]
  //______
  
  
  
  
  
  
  return arr;
}

module.exports = NewSnakePacket;