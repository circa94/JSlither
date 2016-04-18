/*  
 * Class:         UpdateDirectionPacket
 * Description:   Class for updateing snake direction
 * Created:       14.04.2016
 * Last change:   14.04.2016
 * Collaborators: circa94
 */

'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function UpdateDirectionPacket(client) {
    this.unknown1 = 0;
    this.unknown2 = 0;
    this.packetType = consts.packetTypes.e;
    this.snakeId = client.clientId;
    
    this.D = client.snake.direction.angle / 1.411764705882353;  // this comes in client -> 2.012582793705961
    this.x = 71;// this comes in client -> 1.7426021750380884
    this.A = 104; // -> this comes in client 5.777777777777778

}

UpdateDirectionPacket.prototype.toBuffer = function() {
    var arr = new Uint8Array(8);
    var b = 0;
    b += msgUtil.writeInt8(b, arr, 0);
    b += msgUtil.writeInt8(b, arr, 0);
    b += msgUtil.writeInt8(b, arr, this.packetType);
    b += msgUtil.writeInt16(b, arr, this.snakeId);
    b += msgUtil.writeInt8(b, arr, this.D);
    b += msgUtil.writeInt8(b, arr, this.x);
    b += msgUtil.writeInt8(b, arr, this.A);
    return arr;
}

module.exports = UpdateDirectionPacket;