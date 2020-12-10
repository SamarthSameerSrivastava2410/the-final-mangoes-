class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }

        this.pointB = pointB
        this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    
    fly(){
        this.sling.bodyA = null;
    }

    //attach(){
    attach(bodyA){

        this.sling.bodyA = bodyA

    }

    display()
	{

        
		if(this.sling.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);  
		}
	}
    
}
