class PadBehavior extends Sup.Behavior {
  
  inputUp  : string;
  inputDown: string;
  
  awake() {
  }

  update() {
    let velocity = this.actor.arcadeBody2D.getVelocity();
    velocity.x = velocity.y = 0;
    if(Sup.Input.isKeyDown(this.inputUp) && this.actor.getY() < 3.5)
      velocity.y = 0.1;
    else if(Sup.Input.isKeyDown(this.inputDown) && this.actor.getY() > -3.5)
      velocity.y = -0.1;
    this.actor.arcadeBody2D.setVelocity(velocity);
  }
}
Sup.registerBehavior(PadBehavior);
