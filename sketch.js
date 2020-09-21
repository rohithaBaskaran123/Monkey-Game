var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var obstaclesGroup
var fruitGroup
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);
  monkey = createSprite(50, 300, 20, 50);

  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.15;

  ground = createSprite(300, 357, 600, 20);
  ground.velocityX = -6
  ground.x = ground.width / 2;
  console.log(monkey.y);
  //invisibleGround = createSprite(50,55,5000 ,5)
  fruitGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background("white");
  ground.x = ground.width / 2;

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=survivalTime+ Math.ceil(getFrameRate()/60);
  text("Survival Time : " + survivalTime, 100, 50);
  if (keyDown("space") && monkey.y > 300) {
    monkey.velocityY = -17;
  }

  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);

  
  banana();
  rock();
  drawSprites();
}

function banana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(400, 1000, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 200;

    //add each cloud to the group
    fruitGroup.add(banana);
  }
}

function rock() {

  if (frameCount % 300  === 0) {
    var rock = createSprite(400, 1000, 40, 10);
    // rock.y = Math.round(random(120,200));
    rock.addImage(obstacleImage);
    rock.y = 310;
    rock.scale = 0.2;
    rock.velocityX = -3;
    rock.lifetime = 200;
    obstaclesGroup.add(rock);
  }
}