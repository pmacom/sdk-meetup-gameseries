import { PacmanPixelRatio } from "../constants"
import * as utils from '@dcl/ecs-scene-utils'
import { PacManGameState } from "../state"
import { SOUND_PACMAN_CHOMP } from "../sounds"

const scale = .25
export class PacManGameEntityDot extends Entity {
  private shape: SphereShape = new SphereShape()
  private sound: AudioSource = new AudioSource(SOUND_PACMAN_CHOMP)

  constructor(location: Vector2){
    super()
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

    let triggerBox = new utils.TriggerBoxShape()
    triggerBox.position = new Vector3(0,1,0)

    this.addComponent(
      new utils.TriggerComponent(
        triggerBox,
        {
        onCameraEnter : () => {
          log('GOBBLE')
          // this.sound.playOnce()
          this.sound.playing = true
          engine.removeEntity(this)
        },
        // enableDebug: true
      }
      )
    )

    engine.addEntity(this)
  }
}