import * as utils from '@dcl/ecs-scene-utils';
import * as ui from '@dcl/ui-scene-utils';
import { UserTracker } from 'src/systems/UserTracker';
import { connect } from "./connection";
import { PacManGameUserPlaceholder } from './games/pacman/entities/placeholder';
import { PacmanPlayerData } from './games/pacman/interfaces';
import { PacManGameState } from './games/pacman/state';
import { getUserData } from '@decentraland/Identity'
import { PacManGameEntityWall } from './games/pacman/entities/wall';
import { PacManGameEntityDot } from './games/pacman/entities/dots';
import { PacManGameEntitySuperDot } from './games/pacman/entities/superdot';

export const GameStart = () => {
  connect("pacman").then((room) => {
      log("Connected!", room);

      UserTracker.enable(() => {
        const { x, y, z } = Camera.instance.position
        const { x: xr, y: yr, z: zr } = Camera.instance.rotation.eulerAngles
        room.send('location', {
          positionX: x,
          positionY: y,
          positionZ: z,
          rotationX: xr,
          rotationY: yr,
          rotationZ: zr,
        })
      })

      // when a player leaves, remove it from the leaderboard.
      room.state.players.onRemove = (player: any) => {
        // debugger
        // playerPlaceholders.entities.forEach(playerPlaceholder => {
        //   const t = playerPlaceholder
        //   log('Player has left', player.name)
        // })
      }

      room.state.players.onAdd = (player: any ) => {
        const { name, role, positionX, positionY, positionZ }: PacmanPlayerData = player
        const playerEntity = new PacManGameUserPlaceholder(player)
        PacManGameState.playerMap.set(player.name, playerEntity)

        player.onChange = (changes: any) => {
          if(player.name == PacManGameState.playerName){ return }
          let transform = playerEntity.getComponent(Transform)
          let rotation = transform.rotation.clone()
          log(player, changes)

          changes.forEach((change: any) => {
            const { field, value } = change
            switch(field){
              case 'positionX':
                transform.position.x = value
                break;
              case 'positionY':
                transform.position.y = value
                break;
              case 'positionZ':
                transform.position.z = value
                break;
              case 'rotationX':
                rotation.x = value
                break;
              case 'rotationY':
                rotation.y = value
                break;
              case 'rotationZ':
                rotation.z = value
                break;
            }
          })

          transform.rotation = new Quaternion().setEuler(rotation.x, rotation.y, 0) // rotation.z)
        }

        log('Player has entered', name)
      }

      room.state.walls.onAdd = (wall: any) => {
        const { x, y } = wall
        new PacManGameEntityWall(new Vector2(x, y))
      }

      room.state.pellets.onAdd = (p: any) => {
        const { x, y } = p
        new PacManGameEntityDot(new Vector2(x, y))
      }

      room.state.powerPellets.onAdd = (pp: any) => {
        log('NEW POWER PELLET')
        const { x, y } = pp
        new PacManGameEntitySuperDot(new Vector2(x, y))
      }



      room.state.walls.onChange = (wall: any) => {
        log('Wall update', wall)
      }

      room.state.players.onChange = (player: any) => {
        log('Players have changed', player)
      }

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