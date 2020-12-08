var bullet, speed, weight, wall;
var gameState="play";

function setup() {
  createCanvas(1200,400);
  bullet=createSprite(50, 200, 90, 30);
  bullet.shapeColor="white";
  wall= createSprite(1100,200,40,300);
  wall.shapeColor="silver"
  speed=random(8,12);
  weight= random(10,150);
  
}

function draw() {
  background(0); 
  
  
    bullet.velocityX=speed;
  
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation= weight*speed*speed/250;
    if(deformation>23){
      wall.shapeColor= color(255,0,0);
      textSize(29);
      fill("red");
      text("The wall is not strong enough!",400,200);
      text("Reload this page to conduct the test again.",320,240)
    }
    if(deformation<23){
      wall.shapeColor=color(0,255,0);
      textSize(26);
      fill("green")
      text("The wall was able to stop the bullet! ",360,200);
      text("Reload this page to conduct the test again.",320,240);
    }
    
  }
  
  drawSprites();
}