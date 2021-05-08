class Paper{
	constructor(x,y,r)
    {
		var options={

			isStatic: false,
            restitution :0.3,
            friction : 0,
            density : 1.2

			}
		this.x=x;
		this.y=y;
		this.r=r;
		
		this.body=Bodies.circle(x,y,r, options);
        this.image = loadImage("paper.png")
 		World.add(world, this.body);


	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
            rotate(this.body.angle);
			imageMode(CENTER)
			//strokeWeight(4);
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}