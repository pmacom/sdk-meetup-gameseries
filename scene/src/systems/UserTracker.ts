import { UserTransform } from "src/multiplayer/games/pacman/interfaces"

class _UserTracker implements ISystem {
    private system: ISystem
    private isTracking: boolean = false
    public sendPlayerLocation: Function | undefined

    constructor(){
      this.system = this
    }

    enable(sendPlayerLocation: Function){
      this.isTracking = true
      this.sendPlayerLocation = sendPlayerLocation
      if(!this.system.active){
          engine.addSystem(this.system)
      }
    }

    update(dt: number){
      if(!this.isTracking){
        engine.removeSystem(this)
      }
      if(this.sendPlayerLocation){
        this.sendPlayerLocation()
      }
    }
}

export const UserTracker = new _UserTracker()
engine.addSystem(UserTracker)