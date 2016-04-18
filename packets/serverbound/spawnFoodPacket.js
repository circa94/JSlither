/*  
 * Class:         SpawnFoodPacket
 * Description:   Class for spawning new food on the map.
 * Created:       14.04.2016
 * Last change:   14.04.2016
 * Collaborators: circa94
 */

'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function SpawnFoodPacket(foods) {
    this.unknown1 = 0;
    this.unknown2 = 0;
    this.packetType = consts.packetTypes.F;
    this.foods = foods;
}

SpawnFoodPacket.prototype.toBuffer = function() {
    var arr = new Uint8Array(3 + (6 * this.foods.length));
    var b = 0;
    b += msgUtil.writeInt8(b, arr, 0);
    b += msgUtil.writeInt8(b, arr, 0);
    b += msgUtil.writeInt8(b, arr, this.packetType);

    for (var i = 0; i < this.foods.length; i++) {
        var food = this.foods[i];
        b += msgUtil.writeInt8(b, arr, food.color);
        b += msgUtil.writeInt16(b, arr, food.xPos);
        b += msgUtil.writeInt16(b, arr, food.yPos);
        b += msgUtil.writeInt8(b, arr, food.size);
    }
    return arr;
}

module.exports = SpawnFoodPacket;