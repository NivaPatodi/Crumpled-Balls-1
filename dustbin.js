class Dustbin
{
  constructor(x, y, height, angle) 
  //constructorO(x, y, width, height)
  {
    var dustbin_options = 
    {
        restitution : 0.3,
        friction : 0.9,
        density : 1.2,
        isStatic : true
    }

    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = height;

    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, dustbin_options);   
    World.add(world, this.body);

    Matter.Body.setAngle(this.body, angle);    
  }

  display()
  {
    var position = this.body.position;
    var angle = this.body.angle;

    push();

    translate(position.x, position.y);
    rotate(angle);

    rectMode(CENTER);
    fill("blue");
    rect(0, 0, this.width, this.height);

    pop();
  }
}