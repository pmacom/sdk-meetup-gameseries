import { CornerLabel } from '@dcl/ui-scene-utils'
import { getUserData } from '@decentraland/Identity'

// declare const Map: any

export class PacmanGameStateController {
  public playerName: string | undefined
  public dotCount: number = 0
  public UIDotCount: CornerLabel
  public playerMap: Map<string, Entity> = new Map()

  constructor(){
    this.UIDotCount = new CornerLabel('Dots', -20, 100, Color4.Black())
    log(this.playerMap)

    executeTask(async () => {
      let self = await getUserData()

      if(self && self.displayName){
        this.playerName = self.displayName
      }

      // onEnterSceneObservable.add((player) => {
      //   log("player entered scene: ", player.userId)
      //   if (player.userId === myPlayer?.userId) {
      //     log("I entered the scene!")
      //   }
      // })
  
      // onLeaveSceneObservable.add((player) => {
      //   log("player left scene: ", player.userId)
      //   if (player.userId === myPlayer?.userId) {
      //     log("I left the scene!")
      //   }
      // })
    })
  }

  setDotCount(amount: number){
    this.dotCount = amount
    this.updateUI()
  }

  subtractDot(){
    this.dotCount = this.dotCount-1
    this.updateUI()
  }

  updateUI(){
    this.UIDotCount.uiText.value = `DOTS: ${PacManGameState.dotCount}`
  }
}

export const PacManGameState = new PacmanGameStateController()