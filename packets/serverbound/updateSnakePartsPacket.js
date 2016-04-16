/*  
 * Class:         UpdateSnakePartspacket
 * Description:   Class for updating snake parts. Let the client know how many parts have to draw.
 * Created:       16.04.2016
 * Last change:   16.04.2016
 * Collaborators: circa94, Kogs
*/
'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function UpdateSnakePartspacket(){
  this.packetType = consts.packetTypes.G;
}

UpdateSnakePartspacket.prototype.toBuffer = function(){
  var arr = new Uint8Array(11);
  var b = 0;
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, this.packetType);
}

module.exports = UpdateSnakePartspacket;