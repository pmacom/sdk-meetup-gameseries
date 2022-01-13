import { PacManGameEntityDot } from './entities/dots'
import { PacManGameEntityWall } from './entities/wall'
import { PacManGameEntitySuperDot } from './entities/superdot'
import { PacmanGameStateController, PacManGameState } from './state'
import { PacmanLevelData, PacmanTilePosition } from './interfaces'

import level0 from './levels/level0'
import level1 from './levels/level1'

export class PacManGame extends Entity {
  public controller: PacmanGameStateController = PacManGameState
  public levelData: PacmanLevelData | undefined

  constructor(){
    super()
    this.addComponent(new GLTFShape('models/maze.glb'))
    this.addComponent(new Transform({
      position: new Vector3(0, 0, 0),
      rotation: new Quaternion().setEuler(0, 0, 0)
    }))
    engine.addEntity(this)

    this.loadLevel(level1)


  executeTask(async () => {
    let myPlayer = await getUserData()

      onEnterSceneObservable.add((player) => {
        log("player entered scene: ", player.userId)
        if (player.userId === myPlayer?.userId) {
          log("I entered the scene!")
        }
      })

      onLeaveSceneObservable.add((player) => {
        log("player left scene: ", player.userId)
        if (player.userId === myPlayer?.userId) {
          log("I left the scene!")
        }
      })
    })
  }

  loadLevel(levelData: PacmanLevelData){
    levelData.walls.forEach(this.renderWall)
    levelData.pellets.forEach(this.renderPellet)
    levelData.powerPellets.forEach(this.renderPowerPellet)
    const totalPellets = levelData.pellets.length + levelData.powerPellets.length
    this.controller.setDotCount(totalPellets)
  }

  renderWall(wall: PacmanTilePosition){
    const { x, y } = wall
    new PacManGameEntityWall(new Vector2(x, y))
  }

  renderPellet(pellet: PacmanTilePosition){
    const { x, y } = pellet
    new PacManGameEntityDot(new Vector2(x, y))
  }

  renderPowerPellet(powerPellet: PacmanTilePosition){
    const { x, y } = powerPellet
    new PacManGameEntitySuperDot(new Vector2(x, y))
  }
}