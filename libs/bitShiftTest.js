


var number = 257;

var byte1 = (number >> 16) & 0xFF;
var byte2 = (number >> 8 ) & 0xFF;
var byte3 = number  & 0xFF;



console.log(byte1 + " " +byte2 + " " + byte3);

 var grd = byte1 << 16 |byte2 << 8 | byte3;
 console.log(grd);