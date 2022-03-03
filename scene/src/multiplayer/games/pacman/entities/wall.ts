import { PacmanPixelRatio } from "../constants"

const wallMaterial = new Material()
wallMaterial.albedoColor = new Color4(0,0,1,.8)
const topMaterial = new Material()
topMaterial.albedoColor = Color3.Black()

export class PacManGameEntityWall extends Entity {
  private topBox = new Entity()
  private topBoxShape = new BoxShape()

  constructor(location: Vector2){
    super()
    this.addComponent(new BoxShape())
    this.addComponent(new Transform({
      position: new Vector3(
        (location.x*PacmanPixelRatio) + (PacmanPixelRatio/2),
        PacmanPixelRatio/2,
        (location.y*PacmanPixelRatio) + (PacmanPixelRatio/2),
      ),
      rotation: new Quaternion().setEuler(0, 0, 0),
      scale: new Vector3().set(PacmanPixelRatio, 3, PacmanPixelRatio)
    }))
    this.addComponent(wallMaterial)
    engine.addEntity(this)
  }
}

