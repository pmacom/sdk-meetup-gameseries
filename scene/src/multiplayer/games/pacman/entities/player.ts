export class PacmanPlayerEntity extends Entity {
  constructor(role: string) {
    super()
    engine.addEntity(this)
    this.addComponent(new GLTFShape('models/pacman.glb'))
    this.addComponent(new Transform({
      position: new Vector3(0,-1,0),
      scale: new Vector3().setAll(.2),
      // rotation: new Quaternion().setEuler(0,90,0),
    }))
    this.setParent(Attachable.FIRST_PERSON_CAMERA)
  }
}