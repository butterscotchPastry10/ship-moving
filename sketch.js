var sea,ship;
var seaImg,shipImg;

function preload(){

  ship_moving=loadAnimation("ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -4;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("moving",ship_moving);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -4;
    if(sea.x < 0){
      sea.x = sea.width/12
    }

  drawSprites();
}