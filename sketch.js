var hero,killer1,killer2,killer3,boss;
var dragon;

function preload(){
  heroImage=loadImage("hero.png")
  backgroundImage=loadImage("backyard.jpg")
  dragonImage=loadImage("change.png")
  killerImage=loadImage("samurai.png")
  killer2Image=loadImage("samurai2.jpg")
  killer3Image=loadImage("samurai3.jpg")
  killerBossImage=loadImage("samuraiBoss.png")
  }
function setup() {
  createCanvas(1200,500);
  background1=createSprite(0,0,100,100);
background1.scale=1.6
background1.addImage(backgroundImage)
background1.x=background1.width/2
background1.velocityX=-6
hero=createSprite(100,300,100,200)
hero.addImage(heroImage)
dragon.addImage(dragonImage)
}



function draw() {
  background(0);  
  if(background1.x<0){
    background1.x=background1.width/2
  }

  drawSprites();
}