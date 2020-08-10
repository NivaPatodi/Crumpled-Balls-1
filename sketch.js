const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, paper1;
var dustbin, dustbin1;
var bg, bgImg;
var ground, ground1;

function preload()
{
	//bgIMG = loadImage("nature.png");
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//bg = createSprite(400, 350, 1600, 700);
	//bg.addImage(bgIMG);

	//dustbin1 = new Dustbin(680, 635, 20, PI/2);
	dustbin2 = new Dustbin(600, 615, 85, PI/2);
	dustbin3 = new Dustbin(760, 615, 85, PI/2);

	paper1 = new Paper(50, 645, 30);

	ground1 = new Ground(400, 650, 800, 20);

	Engine.run(engine);  
}


function draw() 
{
	background(0);

  	rectMode(CENTER);
	
	//dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	paper1.display();

	ground1.display();

  	drawSprites(); 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:250, y:225});
	}
}