import { PacmanPixelRatio } from "../constants"

export class PacManGameEntityWall extends Entity {
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
      scale: new Vector3().setAll(PacmanPixelRatio)
    }))
    engine.addEntity(this)
  }
}