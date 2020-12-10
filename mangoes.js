/*class Mango {
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true

        }
        
        this.body = Bodies.rectangle(x, y, 100, 100 , options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
      }




}*/

class Mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		
		fill(255,0,255)
		imageMode(CENTER);
		
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}
