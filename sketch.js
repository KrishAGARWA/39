
var ground,groundImage;
var gameState="serve"
var openImage;
var tittle;
var runner,runnerImage;
function preload(){
groundImage=loadImage("ground.png");
openImage=loadImage("open.png")
runnerImage=loadImage("kii.jpg")
}



function setup() {
  createCanvas(600, 500);
  background(0)
// ground=createSprite(300,200,900,10);
// ground.addImage(groundImage);
// ground.scale=1.1;

//   ground.x=ground.width/2

// ground.velocityX=-5


}

function draw() {
  background(0);


if(gameState==="serve"){
tittle=createElement("h1")
tittle.position(600,20)
tittle.html("PRESS SPACE TO START")
text("PRESS SPACE TO SERVE",300,350)
 ground=createSprite(300,200,200,200)
ground.addImage(openImage)
ground.scale=0.6
if(keyDown("space")){
gameState="play"


}
}
if(gameState==="play"){
ground.addImage(groundImage)
ground.velocityX=-10
ground.scale=1.2
if(ground.x<0){
  ground.x=ground.width/2
}

runner=createSprite(100,380,50,50)
runner.addImage(runnerImage)

if (keyDown(UP_ARROW)) {
  runner.velocityY=-8
}
runner.velocityY=runner.velocityY+0.8
}





drawSprites()

}



