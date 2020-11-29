class Plinko{
    constructor(x, y) {
        var options = {
            'restitution':1.0,
            'friction':0,
            'isStatic': true
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, 10, 10);
        pop();
      }
  }
