
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3
var roof

var rope1,rope2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(400,200,90)
	bob2=new Bob(500,200,90)
	bob3=new Bob(600,200,90)

	roof=new Roof(400,100,600,50)

	rope1=new Rope(bob1.body,roof.body,bobDiameter,200)
	rope2=new Rope(bob2.body,roof.body,bobDiameter,200)

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(bob1.body.position.x);
  
  bob1.display()
bob2.display()

 roof.display()

 rope1.display()
 rope2.display()

  drawSprites();
 
}



