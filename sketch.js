
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var dustbin1,dustbin2,dustbin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	dustbin1 = new Dustbin (880,380,200,20);
	dustbin2 = new Dustbin (800,360,20,100);
	dustbin3 = new Dustbin (960,360,20,100);

	var paper_options={
		isStaic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	paper = Bodies.circle(200,100,20,paper_options);
	World.add(world,paper);

	//Render the objects

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipseMode(RADIUS);
ellipse(paper.position.x, paper.position.y, 20, 20);
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
}

function keypressed(){

	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-95});
	}
}

