export class PacmanCharacter extends Entity {
  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new GLTFShape('models/pacman.glb'))
    this.addComponent(new Transform({
      scale: new Vector3().setAll(.5),
      rotation: new Quaternion().setEuler(0,90,0),
    }))
    this.setParent(Attachable.AVATAR)

    // this.addComponent(new Animator())
    // this.getComponent(Animator).addClip(
    //   new AnimationState('Running', { looping: true })
    // )
    // this.getComponent(Animator).addClip(
    //   new AnimationState('Idle', { looping: true })
    // )
  }
  // Play running animation
  // playRunning() {
  //   this.getComponent(Animator).getClip('Running').play()
  // }

  // // Play idle animation
  // playIdle() {
  //   this.getComponent(Animator).getClip('Idle').play()
  // }
}