export class PacmanPlayerEntity extends Entity {
  constructor(role: string) {
    super()
    engine.addEntity(this)
    this.addComponent(new GLTFShape('models/pacman.glb'))
    this.addComponent(new Transform({
      scale: new Vector3().setAll(.5),
      // rotation: new Quaternion().setEuler(0,90,0),
    }))
    this.setParent(Attachable.FIRST_PERSON_CAMERA)
  }
}