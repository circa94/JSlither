/*  
 * Class:         Food
 * Description:   Entity class for food in the game
 * Created:       15.04.2016
 * Last change:   15.04.2016
 * Collaborators: circa94
 */


function Food(id, x, y, size, color) {
    this.id = id;
    this.xPos = x;
    this.yPos = y;
    this.size = size;
    this.color = color;
}


module.exports = Food;