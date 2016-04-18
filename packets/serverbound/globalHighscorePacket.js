/*  
 * Class:         GlobalHighScorePacket
 * Description:   Class for the global highscore (longest snake of the day)
 * Created:       13.04.2016
 * Last change:   13.04.2016
 * Collaborators: circa94, Kogs
*/

'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function GlobalHighscorePacket() {
  //type  = "m"
  this.packetType = consts.packetTypes.m;
  this.J = 462;//VALUE
  this.I = 0.580671702663404 *  consts.INT24MAX; //VALUE??
  // C = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
  //C must be C > 0 (C is the Snake lenght)
  this.text1  = "www.TheHardCoders.de";
  this.text2  = "Private Slither.io Server By The Hard Coders";
}

GlobalHighscorePacket.prototype.toBuffer = function() {
  var arr = new Uint8Array(10 + this.text1.length + this.text2.length);
  var b = 0;
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, 0);
  b += msgUtil.writeInt8(b, arr, this.packetType);
  b += msgUtil.writeInt24(b,arr,this.J);
  b += msgUtil.writeInt24(b,arr,this.I);
  b += msgUtil.writeInt8(b, arr, this.text1.length);
  b += msgUtil.writeString(b, arr, this.text1);
  b += msgUtil.writeString(b, arr, this.text2);

  return arr;
}

module.exports = GlobalHighscorePacket;