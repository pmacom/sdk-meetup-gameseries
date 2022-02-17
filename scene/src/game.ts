import { PacManGame } from "./multiplayer/games/pacman/pacman";
import { connect } from './multiplayer/connection'

import { PacmanPlayerEntity } from "./multiplayer/games/pacman/entities/player"
import { GameStart } from "./multiplayer/gameplay";

GameStart()

// const pacman = new PacManGame()
const pacmanChar = new PacmanPlayerEntity('pacman')

// class testBox1 extends Entity {
//   public shape: BoxShape = new BoxShape()

//   constructor(){
//     super()
//     this.addComponent(new Transform({
//       position: new Vector3(8,2,8),
//     }))

//     this.addComponent(
//       new AvatarModifierArea({
//         area: {
//           box: new Vector3(16,4,16),
//         },
//         modifiers: [
//           AvatarModifiers.HIDE_AVATARS,
//           AvatarModifiers.DISABLE_PASSPORTS
//         ],
//       })
//     )    
//     engine.addEntity(this)
//   }
// }

// const boxtest = new testBox1()
