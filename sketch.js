
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var trashimg;
function preload()
{
trashimg=loadImage("sprites/paper.png")
}

function setup() {
	createCanvas(1200, 700);

	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


ground = new Ground(600,670,1200,20)
dustbinp1 = new Dustbin(890,560,20,200)
dustbinp2 = new Dustbin(1050,560,20,200)
dustbinp3 = new Dustbin1(970,560,200,200)
paper = new Paper(150,300,25)
	Engine.run(engine);
  
}


function draw() {

  background(255,255,255);
  paper.display();
ground.display()
dustbinp1.display();
dustbinp2.display();
dustbinp3.display();
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-125})
	  
	 }
	 
	}


