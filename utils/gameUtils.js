/*  
 * Class:         gameUtils
 * Description:   Helper class for some game operations
 * Created:       15.04.2016
 * Last change:   15.04.2016
 * Collaborators: circa94
 */

'use strict';

var consts = require("./constants");
var mathUtils = require("./mathUtils");
var Entities = require("../entities/entities");

module.exports = {
    createRandomFood: function(amount, saveArray, xFromPos, xToPos, yFromPos, yToPos, minSize, maxSize) {
        for (var i = 0; i < amount; i++) {
            var xPos = mathUtils.getRandomInt(xFromPos, xToPos);
            var yPos = mathUtils.getRandomInt(yFromPos, yToPos);
            var id = xPos * consts.MAPSIZE * 3 + yPos;
            var color = mathUtils.getRandomInt(0, consts.MAXFOODCOLORS - 1);
            var size = mathUtils.getRandomInt(minSize, maxSize);
            saveArray.push(new Entities.Food(id, xPos, yPos, size, color));
        }
    },

    getRandomSpawnPoint: function() {
        return {
            x: mathUtils.getRandomInt(25000 * 5, 30000 * 5),
            y: mathUtils.getRandomInt(25000 * 5, 30000 * 5)
        };
    }
}