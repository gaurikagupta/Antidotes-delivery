var helicopterIMG, helicopterSprite, packageSprite, packageIMG, boxSprite1, boxSprite2, boxSprite3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    packageIMG=loadImage("package.png")
	helicopterIMG=loadImage("helicopter.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	//creating package
    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating groundSprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//creating box's bottom
	boxSprite1=createSprite(width/2, height-50, 200, 20);
    boxSprite1.shapeColor="red";

	//creating box's sides
    boxSprite2=createSprite(500, height-90, 20, 100);
	boxSprite2.shapeColor="red";
	boxSprite3=createSprite(300, height-90, 20, 100);
	boxSprite3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;
     
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.03, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

//making package drop when DOWN ARROW KEY is pressed
function keyPressed() {
 if (keyCode===DOWN_ARROW){
 Matter.Body.setStatic(packageBody, false);
 }
}
		


