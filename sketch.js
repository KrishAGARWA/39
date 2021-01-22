
var ground,groundImage;
var gameState="serve"
var openImage;
var ground1;
var tittle;
var runner,runnerImage;
var ground2
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
 ground=createSprite(300,200,200,200)
ground.addImage(openImage)
ground.scale=0.6
 ground2=createSprite(300,200,200,200)

ground2.addImage(groundImage)
 ground2.velocityX=-10
ground2.scale=1.2
ground2.velocityX=-5
runner=createSprite(100,390,50,50)
runner.addImage(runnerImage)

}

function draw() {
  background(0);


if(gameState==="serve"){
tittle=createElement("h1")
tittle.position(600,20)
tittle.html("PRESS SPACE TO START")
text("PRESS SPACE TO SERVE",300,350)
ground.visible=true
ground2.visible=false

runner.visible=false
if(keyDown("space")){
gameState="play"


}
}
if(gameState==="play"){

ground2.visible=true

ground.visible=false

if(ground2.x<0){
  ground2.x=ground2.width/2

}
ground1=createSprite(10,395,600,10)

runner.visible=true
 runner.collide(ground1)
if (keyDown(UP_ARROW)) {
  runner.velocityY=-8
}
runner.velocityY=runner.velocityY+0.8
}





drawSprites()

}



