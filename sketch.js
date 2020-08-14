var bullet,bullet2,bullet3,bullet4,wall,wall2,wall3,wall4;
var barrier1,barrier2,barrier3,barrier4,barrier5;
var speed,speed2,speed3,speed4,weight,weight2,weight3,weight4;
var thickness,thickness2,thickness3,thickness4;

function setup(){
  createCanvas(600,400);

  //Speed, Weight, and Thickness
  speed = random(223,321);
  speed2 = random(223,321);
  speed3 = random(223,321);
  speed4 = random(223,321);
  weight = random(30,52);
  weight2 = random(30,52);
  weight3 = random(30,52);
  weight4 = random(30,52);
  thickness = random(22,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);
  thickness4 = random(22,83);

  //Bullets
  bullet = createSprite(50,50,10,10);
  bullet2 = createSprite(50,150,10,10);
  bullet3 = createSprite(50,250,10,10);
  bullet4 = createSprite(50,350,10,10);
  bullet.velocityX = speed;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet4.velocityX = speed4;

  //Walls and Barriers
  wall = createSprite(550,50,thickness,30);
  wall2 = createSprite(550,150,thickness2,30);
  wall3 = createSprite(550,250,thickness3,30);
  wall4 = createSprite(550,350,thickness4,30);
  barrier = createSprite(300,100,600,50);
  barrier2 = createSprite(300,200,600,50);
  barrier3 = createSprite(300,300,600,50);
  barrier4 = createSprite(300,400,600,40);
  barrier5 = createSprite(300,0,600,40);
  wall.shapeColor = ("black");
  wall2.shapeColor = ("black");
  wall3.shapeColor = ("black");
  wall4.shapeColor = ("black");
  barrier.shapeColor = ("black");
  barrier2.shapeColor = ("black");
  barrier3.shapeColor = ("black");
  barrier4.shapeColor = ("black");
  barrier5.shapeColor = ("black");
}

function draw(){
  background(200);

  //The Impact
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
    //Damage Formula
    var damage = (0.5 * weight * speed^2)/(thickness^3);

    //Damage Calculations
    if(damage > 10){
      wall.shapeColor = "red";
    }

    if(damage < 10){
      wall.shapeColor = "green";
    }
  }

  if(wall2.x - bullet2.x < wall2.width/2 + bullet2.width/2){
    //Damage Formula
    var damage2 = (0.5 * weight2 * speed2^2)/(thickness2^3);

    //Damage Calculations
    if(damage2 > 10){
      wall2.shapeColor = "red";
    }

    if(damage2 < 10){
      wall2.shapeColor = "green";
    }
  }

  if(wall3.x - bullet3.x < wall3.width/2 + bullet3.width/2){
    //Damage Formula
    var damage3 = (0.5 * weight3 * speed3^2)/(thickness3^3);

    //Damage Calculations
    if(damage3 > 10){
      wall3.shapeColor = "red";
    }

    if(damage3 < 10){
      wall3.shapeColor = "green";
    }
  }

  if(wall4.x - bullet4.x < wall4.width/2 + bullet4.width/2){
    //Damage Formula
    var damage4 = (0.5 * weight4 * speed4^2)/(thickness4^3);

    //Damage Calculations
    if(damage4 > 10){
      wall4.shapeColor = "red";
    }

    if(damage4 < 10){
      wall4.shapeColor = "green";
    }
  }

  //Bullet Collisions
  bullet.collide(wall);
  bullet2.collide(wall2);
  bullet3.collide(wall3);
  bullet4.collide(wall4);

  drawSprites();
}