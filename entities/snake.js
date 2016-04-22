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
    this.speed = 5.76 * 1E3 /* consts.INT16MAX*/ ;

    var pos = gameUtils.getRandomSpawnPoint();

    this.xPos = 21310.6 * 5;
    this.yPos = 23434.8 * 5;
    this.xPosHead = 21310.6 * 5;
    this.yPosHead = 23434.8 * 5;
    this.D = 5.69941607541398 / 2 / Math.PI * consts.INT24MAX // smth for direction
    this.x = this.D;
    
    // parts emu
    this.parts = [];
	for(var i = 0; i < 20;){
		this.parts.push({x: i + 1, y: i + 2});
		i += 2;
	}

    // for(var i = 0 ;i < 2;i++){
    //     this.parts.push({
    //     x: 1,
    //     y: 2
    // });

    // }


    this.length = 10;
    this.J = 306;
    this.I = 0.7810754645511785 * consts.INT24MAX;
    this.direction = {
        x: 0.1,
        y: 0.1,
        angle: 0
    };
    this.fontColor = mathUtils.getRandomInt(0, 8);

}

module.exports = Snake;