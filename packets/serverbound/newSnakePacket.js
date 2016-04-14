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

function NewSnakePacket(client) {
 this.unknown1 = 0;
 this.unknown2 = 0;
 this.packetType = consts.packetTypes.s;
 this.snakeId = client.clientId;
 this.D = 3.1415926535 / Math.PI * consts.INT24MAX; 
 this.x = 3.1415926535 / Math.PI * consts.INT24MAX; //always same as D
 this.speed =  5.76 * 1E3;
 this.H = 0.028860630325116536 * consts.INT24MAX; //always very close to 0. idk what it is
 this.skin = 20;
 this.xPos = 28907.6 * 5;
 this.yPos = 21137.4 * 5;
 this.name = client.username;
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
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, this.packetType);
  b += msgUtil.writeInt16(b, arr, this.snakeId);
  b += msgUtil.writeInt24(b, arr, this.D);
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt24(b, arr, this.x);
  b += msgUtil.writeInt16(b, arr, this.speed);
  b += msgUtil.writeInt24(b, arr, this.H);
  b += msgUtil.writeInt8(b, arr, this.skin);
  b += msgUtil.writeInt24(b, arr, this.xPos);
  b += msgUtil.writeInt24(b, arr, this.yPos);
  b += msgUtil.writeInt8(b, arr, nameLength); //b = 21

  msgUtil.writeString(b, arr, this.name); //b=22
  var index = b + nameLength; //index = 22 + 7 -1 = 28
  msgUtil.writeInt24(index, arr, this.xPosHead); //hier sind wir in byte 28
  msgUtil.writeInt24(index + 3, arr, this.yPosHead); //hier in 31
  index += 6; //index = 37
  //das geht 2 mal durch
  for (var i = 0; i < this.parts.length; i++) {
    msgUtil.writeInt8(index, arr, this.parts[i].x); //das wird auf 37 geschrieben //auf 39
    msgUtil.writeInt8(index + 1, arr, this.parts[i].y); // das auf 38 //auf 40
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

module.exports = NewSnakePacket;