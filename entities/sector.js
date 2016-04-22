/*  
 * Class:         Sector
 * Description:   Entity class for sectors in the game
 * Created:       20.04.2016
 * Last change:   20.04.2016
 */


//whole map size = 216000
//sector size = 300
//216000 / 300 ->>>> there are 720 sectors / 4 ---->>> 180 sectors left to right and 180 sectors top to bottom



function Sector(id,x,y) {
    this.id = id;
    this.xPos = x;
    this.yPos = y;
    this.foods = [];
}


module.exports = Sector;