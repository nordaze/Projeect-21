const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,rightSide,leftSide;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.5,
		friction:0,
		
	}

	ball = Matter.Bodies.circle(600,665,10,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1400,600,20,120);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	
	Engine.run(engine);
	

}


function draw() {

	background(0);

	push ();
	fill (0xffff00);
	ellipse(ball.position.x,ball.position.y,10,10);
	console.log(ball.position.x,ball.position.y)
	pop ();
	
	groundObj.display();
	leftSide.display();
	rightSide.display();


	drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:0.02,y:0.02});
  
	}
}
