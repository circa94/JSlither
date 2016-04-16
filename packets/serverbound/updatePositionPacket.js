/*  
 * Class:         UpdatePositionPacket
 * Description:   Class for updating snake position. Is sending every 2 seconds
 * Created:       13.04.2016
 * Last change:   13.04.2016
 * Collaborators: circa94, Kogs
*/


// this packet is for position correction!! movement could work without this packet.
'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function UpdatePositionPacket(id,x,y){
  this.packetType = consts.packetTypes.g;
  this.id = id;
  this.x = x;
  this.y = y;
}

UpdatePositionPacket.prototype.toBuffer = function(){
  var arr = new Uint8Array(11);
  var b = 0;
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, this.packetType);
  b += msgUtil.writeInt16(b, arr, this.id);
  b += msgUtil.writeInt24(b,arr, this.x);
  b += msgUtil.writeInt24(b,arr, this.y);
  return arr;
}

module.exports = UpdatePositionPacket;