/*class Rock{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true

        }
        
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
      }




}*/
class Rock
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			
			fill(255,0,255)
			imageMode(CENTER);
			
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}