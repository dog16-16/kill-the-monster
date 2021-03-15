class Block
{
    constructor(x,y,width,height)
    {
        var options =
        {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 20
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("Monster-01.png");
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(10);
        stroke(255,0,0)
        fill(234,242,19);
        rect(0,0,this.width,this.height);
        pop();
    }
}