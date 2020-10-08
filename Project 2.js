var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 10, 10);
  wall=createSprite(1200,200,thickness,height/2);

  speed=random (223,321);
  weight=random (30,52);
  thickness=random (22,83);
   
}

function draw() {
  
  background("purple");  
 wall.shapeColor="black";

 bullet.shapeColor="white";

bullet.velocityX=speed;

 if(bullet.x - wall.x < wall.width/2+bullet.width/2 && wall.x -bullet.x < wall.width/2 +bullet.width/2){
bullet.velocityX=0 ;
 }
 else{
  bullet.shapeColor="green";
   wall.shapeColor="black";
 }

 if(wall.x-bullet.x<bullet.width/2+ wall.width/2){
  bullet.velocityX=0 ;
   var deformation=0.5 * weight* speed* speed/22509;
   if(deformation>180){
    bullet.shapeColor="red";
        }
        if(deformation< 180 && deformation>100){
         bullet.shapeColor="yellow";
        }
        if(deformation<100){
         bullet.shapeColor="green";
        }
 }
hasCollided();

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletLeftSide=lbullet.x+lbullet.width;
  wallLeftSide=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  else{
    return false}
}

