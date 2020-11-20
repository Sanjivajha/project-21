var bullet,wall;
var thickness,speed,weigth;

function setup() {
  createCanvas(1600,400);
speed=ramdom(223,321);
weidth=ramdom(25,30);

bullet = createSprite(500, 200, 50, 50);
wall = createSprite(1200,200,60,100);








thichness=ramdom(22,83);


}

function draw() {
  background(black); 
  
  
if(hascollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weigth * speed*speed/(thickness *thickness*thichness);


if(damage>10)
{
  wall.shapeColor=color(255,0,0);//RED
}


if(dam<10)
{
wall.shapeColor=color(0,255,0);//GREEN
}

}


  drawSprites();

hascollided(bullet,wall);
}

function hascollided(bullet,wall)
{

  bulletRightEdge=lbullet.x+lbullet.weidth;
  wallLeftEdge+lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  
  }
  return false
}


