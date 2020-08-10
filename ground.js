class Ground
{
    constructor(x, y, width, height)
    {
        var ground_options =
        {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, ground_options);
        World.add(world, this.body);
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