import { CornerLabel } from '@dcl/ui-scene-utils'

// declare const Map: any

export class PacmanGameStateController {
  public dotCount: number = 0
  public UIDotCount: CornerLabel
  public playerMap: Map<string, Entity> = new Map()

  constructor(){
    this.UIDotCount = new CornerLabel('Dots', -20, 100, Color4.Black())
    log(this.playerMap)
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