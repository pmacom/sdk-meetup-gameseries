import { PacManGameEntityDot } from './entities/dots'
import { PacManGameEntityWall } from './entities/wall'
import { PacManGameEntitySuperDot } from './entities/superdot'
import { PacmanGameStateController, PacManGameState } from './state'
import { PacmanLevelData, PacmanTilePosition } from './interfaces'

import level0 from './levels/level0'
import level1 from './levels/level1'
import { getUserData } from '@decentraland/Identity'

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