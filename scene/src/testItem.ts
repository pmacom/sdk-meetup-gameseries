export class TestItem extends Entity {
  constructor(){
    super()
    this.addComponent(new GLTFShape('models/testItem.glb'))
    this.addComponent(new Transform({
    }))
    engine.addEntity(this)
  }
}