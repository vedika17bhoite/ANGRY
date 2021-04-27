class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.5,
          'friction':4,
          'density':1,
      }
      this.body = Bodies.rectangle(x, y, 20 , height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ("blue");
      strokeWeight(5);
      fill("crimson");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  