/*  
 * Class:         PongPacket
 * Description:   Class for the pong from the server
 * Created:       13.04.2016
 * Last change:   13.04.2016
 * Collaborators: circa94, Kogs
*/

'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function PongPacket() {
  this.packetType = consts.packetTypes.p;
}
PongPacket.prototype.toBuffer = function() {
  var arr = new Uint8Array(3);
  msgUtil.writeInt8(2, arr, this.packetType);
  return arr;
}

module.exports = PongPacket;