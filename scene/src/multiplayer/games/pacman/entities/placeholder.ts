import { PacmanPixelRatio } from "../constants"
import { PacmanPlayerData } from "../interfaces"

const wallMaterial = new Material()
wallMaterial.albedoColor = Color3.Purple()
const topMaterial = new Material()
topMaterial.albedoColor = Color3.Black()

export class PacManGameUserPlaceholder extends Entity {
  constructor(public player: PacmanPlayerData){
    super()
    const shape = new BoxShape()
    shape.withCollisions = false
    this.addComponent(shape)
    this.addComponent(new Transform({
      position: new Vector3(0,0,0),
      // rotation: new Quaternion().setEuler(0, 0, 0),
      // scale: new Vector3().setAll(PacmanPixelRatio)
    }))
    this.addComponent(wallMaterial)
    engine.addEntity(this)
  }

  updateLocation(position: Vector3){

  }
}