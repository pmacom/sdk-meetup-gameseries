import { PlayerPlaceholder } from "src/multiplayer/games/pacman/entities/placeholder"

interface UserLocation {
  positionX: number,
  positionY: number,
  positionZ: number,
}

const playerPlaceholders = engine.getComponentGroup(PlayerPlaceholder)

class _UserTracker implements ISystem {
    private system: ISystem
    private isTracking: boolean = false
    public location: UserLocation | undefined
    public getPlayerLocation: Function | undefined

    constructor(){
      this.system = this
    }

    enable(getPlayerLocation: Function){
      this.isTracking = true
      this.getPlayerLocation = getPlayerLocation
      if(!this.system.active){
          engine.addSystem(this.system)
      }
    }

    update(dt: number){
      if(!this.isTracking){
        engine.removeSystem(this)
      }
      if(this.getPlayerLocation){
        this.getPlayerLocation()
      }
      // if(playerPlaceholders.size){
      //   playerPlaceholders.forEach(() => {})
      // }
    }
}

export const UserTracker = new _UserTracker()
engine.addSystem(UserTracker)