import { CornerLabel } from '@dcl/ui-scene-utils'

export class PacmanGameStateController {
  public dotCount: number = 0
  public UIDotCount: CornerLabel

  constructor(){
    this.UIDotCount = new CornerLabel('Dots', -20, 100, Color4.Black())
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