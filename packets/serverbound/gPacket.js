/*  
 * Class:         GPacket
 * Description:   Class for updating snake position (but nor sure)
 * Created:       13.04.2016
 * Last change:   13.04.2016
 * Collaborators: circa94, Kogs
*/

'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function GPacket(id,x,y){
  this.packetType = consts.packetTypes.g;
  this.x = x;
  this.y = y;
}

GPacket.prototype.toBuffer = function(){
  var arr = new Uint8Array(9);
  var b = 0;
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, this.packetType);
  b += msgUtil.writeInt24(b,arr, this.x);
  b += msgUtil.writeInt24(b,arr, this.y);
  return arr;
}

exports.GPacket = function(id,x,y) {
    return new GPacket(id,x,y);
}