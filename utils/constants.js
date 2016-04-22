/*  
 * Class:         Constants
 * Description:   Just an collection of some constant values like max values and packet types.
 * Created:       13.04.2016
 * Last change:   14.04.2016
 * Collaborators: circa94, Kogs
 */

'use strict';

const INT24MAX = 16777215;
const INT16MAX = 65535;
const INT8MAX = 255;
const MAXFOODCOLORS = 24;
const MAPSIZE = 216000;
const SECTORSIZE = 300;

module.exports = {
    INT24MAX: INT24MAX,
    INT16MAX: INT16MAX,
    INT8MAX: INT8MAX,
    MAXFOODCOLORS: MAXFOODCOLORS,
    MAPSIZE: MAPSIZE,
    SECTORSIZE : SECTORSIZE,
    packetTypes: {
        a: 97, //initialPacket
        s: 115, //newSnakePacket
        m: 109, //GlobalHighScorePacket
        p: 112, //pongPacket
        g: 103, //updatePosition
        F: 70, //spawnFoodPacket
        e: 101, //updateDirection
        G: 71, //updateSnakeParts
        h:104, //eatFoodPacket
        l:108,//leaderboardPacket
        three : 52 //updateRemotePacket
    }
};