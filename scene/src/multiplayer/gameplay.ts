import * as utils from '@dcl/ecs-scene-utils';
import * as ui from '@dcl/ui-scene-utils';
import { UserTracker } from 'src/systems/UserTracker';
import { connect } from "./connection";
import { PacManGameUserPlaceholder, PlayerPlaceholder } from './games/pacman/entities/placeholder';

const playerPlaceholders = engine.getComponentGroup(PlayerPlaceholder)

export const GameStart = () => {
  connect("pacman").then((room) => {
      log("Connected!", room);

      UserTracker.enable(() => {
        const { x, y, z } = Camera.instance.feetPosition
        room.send('location', { positionX: x, positionY: y, positionZ: z })

        // if(playerPlaceholders.entities.length){
        //   playerPlaceholders.entities
        // }
        // log(room.state.players)
      })

      // when a player leaves, remove it from the leaderboard.
      room.state.players.onRemove = (player: any) => {
        playerPlaceholders.entities.forEach(playerPlaceholder => {
          const t = playerPlaceholder
          debugger
        })
      }

      room.state.players.onAdd = (player: any ) => {
        const { name, role } = player
        const playerEntity = new PacManGameUserPlaceholder(player.name)
      }
      

      room.state.listen("countdown", (num: number) => {
        
      })

      room.onMessage("welcome", (data) => {
        log('We got a message', data)
        log('Room state', room.state)
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
}