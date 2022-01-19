import { PacmanPlayerData } from "../interfaces"

const wallMaterial = new Material()
wallMaterial.albedoColor = Color3.Purple()

const topMaterial = new Material()
topMaterial.albedoColor = Color3.Black()

export class PacManGameUserPlaceholder extends Entity {
  constructor(public player: PacmanPlayerData){
    super()
    this.addComponent(new GLTFShape('models/pacman.glb'))
    this.addComponent(new Transform({
      scale: new Vector3().setAll(.5)
    }))
    engine.addEntity(this)
  }
}