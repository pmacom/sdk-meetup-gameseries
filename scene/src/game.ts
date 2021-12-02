import { PacManGame } from "./multiplayer/games/pacman/pacman";


class TestCube extends Entity {
  constructor(){ 
    super()
    this.addComponent(new BoxShape())
    this.addComponent(new Transform({
      position: new Vector3(1,2,1)
    }))
    engine.addEntity(this)
  }
}


const pacman = new PacManGame()
