/*  
 * Class:         Snake
 * Description:   Entity class for the players snake.
 * Created:       15.04.2016
 * Last change:   15.04.2016
 * Collaborators: circa94
 */

var gameUtils = require("../utils/gameUtils");
var consts = require("../utils/constants");

function Snake(id, username, skin) {
    this.id = id;
    this.username = username;
    this.skin = skin;
    this.speed = 5.76 * 1E3;

    var pos = gameUtils.getRandomSpawnPoint();

    this.xPos = pos.x;
    this.yPos = pos.y;
    this.xPosHead = pos.x;
    this.yPosHead = pos.y;
    this.D = 3.1415926535 / Math.PI * consts.INT24MAX // smth for direction
    this.x = this.D;
    this.parts = [{
        x: 138,
        y: 43
    }];
}

module.exports = Snake;