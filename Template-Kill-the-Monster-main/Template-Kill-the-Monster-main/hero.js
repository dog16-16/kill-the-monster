class Hero
{
	constructor(x,y,r)
	{
		var options = 
        {
			
            density: 1,
            frictionAir: 1
        }
		this.x=x;
		this.y=y;
		this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.image = loadImage("Superhero-01.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var heroPos=this.body.position;		

			push()
			translate(heroPos.x, heroPos.y);
            imageMode(CENTER);
			image(this.image,0,0,this.r+150,this.r)
			//ellipse(0,0,this.r,this.r)
			pop()
			
	}

}