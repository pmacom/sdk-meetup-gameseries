import * as utils from '@dcl/ecs-scene-utils';
import * as ui from '@dcl/ui-scene-utils';
import { UserTracker } from 'src/systems/UserTracker';
import { connect } from "./connection";
import { PacManGameUserPlaceholder, PlayerPlaceholder } from './games/pacman/entities/placeholder';

const playerPlaceholders = engine.getComponentGroup(PlayerPlaceholder)

declare const Map: any

const playerMap = new Map()

export const GameStart = () => {
  connect("pacman").then((room) => {
      log("Connected!", room);

      UserTracker.enable(() => {
        const { x, y, z } = Camera.instance.feetPosition
        room.send('location', { positionX: x, positionY: y, positionZ: z })
        log('room', room)
      })

      // when a player leaves, remove it from the leaderboard.
      room.state.players.onRemove = (player: any) => {
        // debugger
        playerPlaceholders.entities.forEach(playerPlaceholder => {
          const t = playerPlaceholder
          log('Player has left', player.name)
        })
      }

      room.state.players.onAdd = (player: any ) => {
        const { name, role, positionX, positionY, positionZ }: PacmanPlayerData = player
        playerMap.set(player.name, new PacManGameUserPlaceholder(player))

        // player.listen('positionX', (positionX: number[]) => {
        //   // update pos
        // })

        log('Player has entered', name)
      }

      room.state.players.onChange = (player: any ) => {
        log('this is firing')
      }

      room.onMessage("updatePlayerLocation", (data) => {
        const {
          playerId,
          positionX,
          positionY,
          positionZ,
        } = data
        log('User location has changed', playerId, positionX, positionY, positionZ)
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