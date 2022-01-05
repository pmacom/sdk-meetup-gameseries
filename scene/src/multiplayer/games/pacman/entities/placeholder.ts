import { PacmanPixelRatio } from "../constants"

const wallMaterial = new Material()
wallMaterial.albedoColor = Color3.Purple()
const topMaterial = new Material()
topMaterial.albedoColor = Color3.Black()

@Component("playerPlaceholder")
export class PlayerPlaceholder {
  constructor(public name: string){
  }
}

export class PacManGameUserPlaceholder extends Entity {
  constructor(public name: string){
    super()
    this.addComponent(new BoxShape())
    this.addComponent(new Transform({
      position: new Vector3(0,0,0),
      rotation: new Quaternion().setEuler(0, 0, 0),
      scale: new Vector3().setAll(PacmanPixelRatio)
    }))
    this.addComponent(new PlayerPlaceholder(name))
    this.addComponent(wallMaterial)
    engine.addEntity(this)
  }
}