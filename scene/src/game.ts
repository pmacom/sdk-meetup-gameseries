import { PacManGame } from "./multiplayer/games/pacman/pacman";
import { connect } from './multiplayer/connection'

import { PacmanPlayerEntity } from "./multiplayer/games/pacman/entities/player"
import { GameStart } from "./multiplayer/gameplay";

GameStart()

// const pacman = new PacManGame()
const pacmanChar = new PacmanPlayerEntity('pacman')

class testBox1 extends Entity {
  public shape: BoxShape = new BoxShape()

  constructor(){
    super()
    this.addComponent(new Transform({
      position: new Vector3(8,2,8),
    }))

    this.addComponent(
      new AvatarModifierArea({
        area: {
          box: new Vector3(16,4,16),
        },
        modifiers: [
          AvatarModifiers.HIDE_AVATARS,
          AvatarModifiers.DISABLE_PASSPORTS
        ],
      })
    )    
    engine.addEntity(this)
  }
}

const boxtest = new testBox1()











import * as utils from '@dcl/ecs-scene-utils'

export class FirstPersonZone extends Entity {
    public triggerZoneDebug: Entity = new Entity()
    public triggerZoneBoxShape: BoxShape = new BoxShape()
    public triggerBoxShape: utils.TriggerBoxShape = new utils.TriggerBoxShape()

    constructor(
        private triggerZonePosition: Vector3,
        private triggerZoneScale: Vector3,
        private showDebug: boolean = true
    ) {
        super()
        this.setupTriggerZoneDebug()
        this.forceFirstPerson()
    }

    setupTriggerZoneDebug(){
        this.triggerZoneBoxShape.withCollisions = false
        this.triggerZoneDebug.addComponent(new Transform({
            position: this.triggerZonePosition,
            scale: this.triggerZoneScale
        }))
        this.triggerBoxShape.size = this.triggerZoneScale
        this.triggerZoneDebug.addComponent(
            new utils.TriggerComponent(
              this.triggerBoxShape,
                {
                    onCameraEnter : () => {this.onEnter()},
                    onCameraExit : () => {this.onExit()},
                    enableDebug: this.showDebug
                }
            )
        )
        this.showTriggerZone()
    }

    public onEnter(){
    }

    public onExit(){
    }

    private showTriggerZone(){
        engine.addEntity(this.triggerZoneDebug)
    }

    private hideTriggerZone(){
        engine.removeEntity(this.triggerZoneDebug)
    }

    private forceFirstPerson(){
        this.triggerZoneDebug.addComponentOrReplace(
            new CameraModeArea({
                area: { box: this.triggerZoneScale },
                cameraMode: CameraMode.FirstPerson,
            })
        )
    }

}

const firstPersonZone = new FirstPersonZone(
    new Vector3(8,2,8),
    new Vector3(16,3,16),
    false
)