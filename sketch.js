const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyIMG = loadImage("boy.png");
	treeIMG = loadImage("tree.png")
}
  

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100, 540, 50, 100);
	boy.addImage(boyIMG);
	boy.scale = 0.1;

	tree = createSprite(600, 420, 50, 100);
	tree.addImage(treeIMG);
	tree.scale = 0.3;



	ground = new Ground(400, 600, 1000, 10);

	rock = new Rock(50, 480,30);

	chain = new SlingShot(rock.body, {x:50, y:480})

	mango1 = new Mango(550, 350,30);
	mango2 = new Mango(600, 350,30);
	mango3 = new Mango(650, 350,30);
	mango4 = new Mango(650, 300,30);
	mango5 = new Mango(600, 300,30);


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
 

  Engine.update(engine);
  
  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
 
  rock.display();

  chain.display();

  dectColllide(rock, mango1);
  dectColllide(rock, mango2);
  dectColllide(rock, mango3);
  dectColllide(rock, mango4);
  dectColllide(rock, mango5)
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}




function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(rock.body, {x:50, y:480})
    chain.attach(rock.body)

  }
    


}

function dectColllide(lrock, lmango) {
	mangoBodyPosition=lmango.body.position
	rockBodyPosition=lrock.body.position
	
	var distance=dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	//console.log(distance)
   // console.log(lmango.r+lstone.r)
		if(distance<=lmango.r+lrock.r)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lmango.body,false);
	  }
	
  }



