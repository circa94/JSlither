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

module.exports = {
    INT24MAX: INT24MAX,
    INT16MAX: INT16MAX,
    INT8MAX: INT8MAX,
    MAXFOODCOLORS: MAXFOODCOLORS,
    MAPSIZE: MAPSIZE,
    packetTypes: {
        a: 97,
        s: 115,
        m: 109,
        p: 112,
        g: 103,
        F: 70
    }
};