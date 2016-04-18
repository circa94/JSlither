/*  
 * Class:         Snake
 * Description:   Entity class for the players snake.
 * Created:       15.04.2016
 * Last change:   15.04.2016
 * Collaborators: circa94
 */

var gameUtils = require("../utils/gameUtils");
var consts = require("../utils/constants");
var mathUtils = require('../utils/mathUtils');

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
    this.length = 11.7 + id;
    this.J = 306;
    this.I = 0.7810754645511785 * consts.INT24MAX;
    this.direction = {
        x: 0.1,
        y: 0.1,
        angle: 0
    };
    this.fontColor = mathUtils.getRandomInt(0,8);

}

module.exports = Snake;