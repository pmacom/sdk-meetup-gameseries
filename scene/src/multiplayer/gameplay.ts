import * as utils from '@dcl/ecs-scene-utils';
import * as ui from '@dcl/ui-scene-utils';
import { connect } from "./connection";

//
// Connect to Colyseus server! 
// Set up the scene after connection has been established.
//
connect("my_room").then((room) => {
    log("Connected!");

    // when a player leaves, remove it from the leaderboard.
    room.state.players.onRemove = () => {
       
    }

    room.state.listen("countdown", (num: number) => {
       
    })

    room.onMessage("start", () => {
      log('User has joined the room!')
    });

    room.onLeave((code) => {
        log("onLeave, code =>", code);
    });

}).catch((err) => {
    error(err);

});