var bullet,wall,speed,weight,deform,thickness,damage;
function setup() {
  speed = random(223,321);
  weight = random(30,52);
  createCanvas(1600,400);
  bullet = createSprite(200,200,50,10);
  thickness=random(22,83);
  wall = createSprite(1500,200,thickness,800);
  wall.shapeColor = "80,80,80";
}

function draw() {
  background(0);
  bullet.velocityX = speed;
  
  console.log(damage)
  if(wall.x - bullet.x < bullet.width /2 + wall.width /2)
  {
    
    bullet.velocityX = 0;
    deform= 0.5*weight*speed*speed/22500;
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(damage>10)
    {
      wall.shapeColor = "red";
    }else if(damage<10)
    {
      wall.shapeColor = "green";
    }  
    
  }

  drawSprites();
}