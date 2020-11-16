
var bullet, wall; 
var thickness, speed, weight;

function setup() {
  
  createCanvas(1600,400);

 
  bullet = createSprite(50, 200, 90, 10);
  bullet.shapeColor = "gray";

  //creating a wall sprite
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

  //random values to speed, thickness and weight
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}
function draw() {

  background(255,255,255);

 
  bullet.velocityX = speed;

  if (hasCollided(bullet,wall))
  {
    //if collision happens, bullet's x velocity = 0
    bullet.velocityX = 0;

    //formula for damage
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    //changing colours according to damage
    if (damage > 10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  //drawing the sprites
  drawSprites();
}
//function for collision
function hasCollided(lbullet , lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;

  wallLeftEdge = lwall.x;

  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}