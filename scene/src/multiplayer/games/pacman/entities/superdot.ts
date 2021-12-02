import { PacmanPixelRatio } from "../constants"
import * as utils from '@dcl/ecs-scene-utils'

const scale = .5
export class PacManGameEntitySuperDot extends Entity {
  private shape: SphereShape

  constructor(location: Vector2){
    super()
    this.shape = new SphereShape()
    this.addComponent(this.shape)
    this.addComponent(new Transform({
      position: new Vector3(
        (location.x*PacmanPixelRatio) + (PacmanPixelRatio/2),
        PacmanPixelRatio/2,
        (location.y*PacmanPixelRatio) + (PacmanPixelRatio/2),
      ),
      rotation: new Quaternion().setEuler(0, 0, 0),
      scale: new Vector3().setAll(scale)
    }))
    this.shape.withCollisions = false
    engine.addEntity(this)

    let triggerBox = new utils.TriggerBoxShape()
    triggerBox.position = new Vector3(0,1,0)
    this.addComponent(
      new utils.TriggerComponent(
        triggerBox,
        {
        onCameraEnter :
          () => {
            log('SUPER GOBBLE')
            engine.removeEntity(this)
        },
      }
      )
    )
  }
}