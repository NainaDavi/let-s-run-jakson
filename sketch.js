var jake,jake_running,coin,coinImg,coin1,coinImg1,coin2,coinImg2,bomb,bomb1,bomb2,bombImg2,energy,


function preload(){
 
  runnerImg=loadAnimation("Runner.png", "Runner.png", );
  pathImg=loadImage("path.png");
  bombImg=loadImage("bomb.png");
  coinImg=loadImage("coin.png");
  energyDrinkImg=loadImage("energyDrinkImg")
}
function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
 runner=createSprite(180,340,50,170);
 runner.addAnimation("running", runnerImg);
  
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}
function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
 runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  if(runner.isTouching(coin)) {
    coinscore = coinscore+1;
   }
   runner.collide(left_boundary);
  runner.collide(right_boundary);
  edges=createEdgeSprites();
  runner.collide(edges[3]);
drawSprites();
}