class BallBehavior extends Sup.Behavior {
  
  dx: number;
  dy: number;

  awake() {
    this.dx = 0.1;
    this.dy = 0.1;
  }

  update() {    
    let velocity = this.actor.arcadeBody2D.getVelocity();
    
    if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies()))
      this.dx = -this.dx;
    if(this.actor.getY() + this.dy < -5 || this.actor.getY() + this.dy > 5)
      this.dy = -this.dy;
      
    velocity.x = this.dx;
    velocity.y = this.dy;
    
    this.actor.arcadeBody2D.setVelocity(velocity);
    
    if(this.actor.getX() + this.dx < -9 || this.actor.getX() + this.dx > 9)
      this.actor.arcadeBody2D.warpPosition(new Sup.Math.Vector2(0,0));
  }
}
Sup.registerBehavior(BallBehavior);
