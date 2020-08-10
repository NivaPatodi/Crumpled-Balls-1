class Paper
{
    constructor(x, y, radius)
    {
        var paper_options=
        {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x, this.y, this.radius, paper_options);   
        World.add(world, this.body);
    }

    display()
    {
        var position = this.body.position;
        var angle = this.body.angle;

        push();

        translate(position.x, position.y);
        rotate(angle);

        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0, 0, this.radius, this.radius);

        pop();
    }
}