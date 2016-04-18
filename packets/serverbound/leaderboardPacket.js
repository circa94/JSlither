/*  
 * Class:         LeaderboardPacket
 * Description:   Class for updating the leaderboard.
 * Created:       16.04.2016
 * Last change:   16.04.2016
 * Collaborators: circa94
 */

'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var mathUtils = require("../../utils/mathUtils");
var exports = module.exports = {};

function LeaderboardPacket(rank, players_count, top_ten) {
    this.unknown1 = 0;
    this.unknown2 = 0;
    this.packetType = consts.packetTypes.l;
    this.rank = rank;
    this.playersCount = players_count;
    this.topTen = top_ten;
}

LeaderboardPacket.prototype.toBuffer = function() {
    
    var count = 0;
    this.topTen.forEach(function(player){
        count+= player.snake.username.length;
    });
    
    var arr = new Uint8Array((8 + count) + (this.topTen.length * 7));
    var b = 0;
    b += msgUtil.writeInt8(b, arr, 0);
    b += msgUtil.writeInt8(b, arr, 0);
    b += msgUtil.writeInt8(b, arr, this.packetType);
    b += msgUtil.writeInt8(b, arr, 0); // i really dont know what this field is
    b += msgUtil.writeInt16(b, arr, this.rank);
    b += msgUtil.writeInt16(b, arr, this.playersCount);

    for (var i = 0; i < this.topTen.length; i++) {
        b += msgUtil.writeInt16(b, arr, this.topTen[i].snake.J);
        b += msgUtil.writeInt24(b, arr, this.topTen[i].snake.I);
        b += msgUtil.writeInt8(b, arr, this.topTen[i].snake.fontColor);
        b += msgUtil.writeInt8(b, arr, this.topTen[i].snake.username.length);
        b += msgUtil.writeString(b, arr, this.topTen[i].snake.username);
    }
    
    return arr;
}

module.exports = LeaderboardPacket;