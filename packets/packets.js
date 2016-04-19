/*  
 * Class:         Packets
 * Description:   Collection of all packets for simple access.
 * Created:       14.04.2016
 * Last change:   15.04.2016
 * Collaborators: circa94
 */
 
module.exports = {
    GlobalHighscorePacket: require('./serverbound/globalHighscorePacket'),
    InitialPacket: require('./serverbound/initialPacket'),
    NewSnakePacket: require('./serverbound/newSnakePacket'),
    PongPacket: require('./serverbound/pongPacket'),
    SpawnFoodPacket: require('./serverbound/spawnFoodPacket'),
    SetUsernamePacket: require('./clientbound/setUsernamePacket'),
    UpdateDirectionPacket : require("./serverbound/updateDirectionPacket"),
    UpdatePositionPacket : require("./serverbound/updatePositionPacket"),
    MovePacket : require("./serverbound/movePacket"),
    EatFoodPacket : require("./serverbound/eatFoodPacket"),
    LeaderboardPacket : require("./serverbound/leaderboardPacket"),
};