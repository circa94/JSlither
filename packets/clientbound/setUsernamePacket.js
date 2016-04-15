/*  
 * Class:         SetUsernamePacket
 * Description:   Class for setting the username when a player starts a new game (currently not in use).
 * Created:       13.04.2016
 * Last change:   13.04.2016
 * Collaborators: circa94, Kogs
*/

var exports = module.exports = {};

function SetUsernamePacket(u1, u2, username) {
  this.unknown1 = u1;
  this.unknown2 = u2;
  this.packetType = 97;
  this.username = username;
}

exports.SetUsernamePacket = function() {
    return new SetUsernamePacket();
}