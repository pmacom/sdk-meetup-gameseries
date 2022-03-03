import { PacmanPlayerData } from "../interfaces"

const wallMaterial = new Material()
wallMaterial.albedoColor = Color3.Purple()

const topMaterial = new Material()
topMaterial.albedoColor = Color3.Black()

export class PacManGameUserPlaceholder extends Entity {
  private textShape: TextShape = new TextShape()
  private textEntity: Entity = new Entity()

  constructor(public player: PacmanPlayerData){
    super()
    log('This is the player')
    log(player)


    this.textShape.value = player.name
    this.textShape.billboard = true
    this.textShape.fontSize = 3
    this.textEntity.addComponent(this.textShape)
    this.textEntity.addComponent(new Transform({
      position: new Vector3(0, 2, 0)
    }))
    this.textEntity.setParent(this)

    this.addComponent(new GLTFShape('models/pacman.glb'))
    this.addComponent(new Transform({
      scale: new Vector3().setAll(.5)
    }))
    engine.addEntity(this)
  }
}