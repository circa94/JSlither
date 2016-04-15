/*  
 * Class:         UpdatePositionPacket
 * Description:   Class for updateing snake positions
 * Created:       14.04.2016
 * Last change:   14.04.2016
 * Collaborators: circa94
 */

'use strict';

var msgUtil = require('../../utils/message_util');
var consts = require("../../utils/constants");
var exports = module.exports = {};

function UpdateDirectionPacket(id) {
    this.unknown1 = 0;
    this.unknown2 = 0;
    this.packetType = consts.packetTypes.e;
    this.snakeId = id;
    this.D = 82; // this comes in client -> 2.012582793705961
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

//length is dynamic
//snakeId
//D = 2.012582793705961
//x	= 1.7426021750380884
//Y	1.7426021750380884

// D = 2 * b[e] * Math.PI / 256;
// e++;
// x = 2 * b[e] * Math.PI / 256;
// e++;
// A = b[e] / 18;
