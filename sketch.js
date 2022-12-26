
var man,manImage;
var wall,wallImage;
var zombie,zombieImage;
var bullet,bulletImage

function preload(){
  manImage = loadImage("./assets/man.png")
  wallImage = loadImage("./assets/wall.jpeg")
  bulletImage = loadImage("./assets/bullet.png")
  zombie1Image = loadAnimation("./assets/zombie2/zo1.png","./assets/zombie2/zo2.png","./assets/zombie2/zo3.png","./assets/zombie2/zo4.png","./assets/zombie2/zo5.png","./assets/zombie2/zo6.png")
  zombieImage = loadAnimation("./assets/zombie1/z1.png","./assets/zombie1/z2.png","./assets/zombie1/z3.png","./assets/zombie1/z5.png","./assets/zombie1/z6.png","./assets/zombie1/z7.png","./assets/zombie1/z8.png","./assets/zombie1/z9.png","./assets/zombie1/z10.png","./assets/zombie1/z11.png")
}


function setup(){
  createCanvas(windowWidth,windowHeight)
  man = createSprite(120,400)
  man.addImage(manImage)
  man.scale = 1.2
  


  

}

function draw(){
  background(wallImage)

  spawnZombies()
  drawSprites()
  if (keyDown("space")){
    spawnBullets();
  }
  
}

function spawnZombies(){
  if(frameCount % 100===0){
    zombie = createSprite(1100,400)
    zombie.addAnimation("first",zombieImage)
    zombie.addAnimation("second",zombie1Image)
    var rand = Math.round(random(1,2))
    switch(rand){
      case 1:zombie.changeAnimation("first");
      break;
      case 2:zombie.changeAnimation("second");
      break;
      default:break;
    }
    zombie.scale = 0.4
    zombie.velocityX = -2
  }
}
function spawnBullets(){
  bullet = createSprite(man.x+50,man.y-50);
  bullet.addImage(bulletImage)
  bullet.velocityX = 2
  bullet.scale = 0.5

}
