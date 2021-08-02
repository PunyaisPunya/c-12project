
function preload(){
  //pre-load images
  bombImg=loadImage("bomb.png");
  coinImg=loadImage("coin.png");
  groundImg=loadImage("path.png");
  runninganimation=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  ground=createSprite(200,200,400,400);
  ground.addImage(groundImg);
  ground.velocityY = 5

  player=createSprite(200,300,20,20);
  player.addAnimation("running",runninganimation);
  player.scale=0.05

  leftBoundry=createSprite(0,200,1,400);
  rightBoundry=createSprite(400,200,1,400);

  
}


function draw() {
  background(220);
  if (ground.y > 400) {
    ground.y = height / 2;
  }

if(keyDown("left")){
  player.x=player.x-5

}
if(keyDown("right")){
  player.x=player.x+5

}

player.collide(leftBoundry);
player.collide(rightBoundry);

 drawSprites();
}
