class Monster
{
    constructor(x,y,width,height)
    {
        var options =
        {
            //'restitution': 0.8,
            'friction': 1.0,
            'density': 20
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("pic/Monster-01.png");
        this.width = width;
        this.height = height;
                World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        

      console.log(this.image);

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //rectMode(CENTER);
       // imageMode(CENTER);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 300, 300);
        //rect(0,0,this.width,this.height);
        pop();
    }
}