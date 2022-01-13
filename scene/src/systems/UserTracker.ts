import { UserTransform } from "src/multiplayer/games/pacman/interfaces"

class _UserTracker implements ISystem {
    private system: ISystem
    private isTracking: boolean = false
    public location: UserTransform | undefined
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

    updatePlayerLocation(name: string, position: Vector3) {
      
    }
}

export const UserTracker = new _UserTracker()
engine.addSystem(UserTracker)