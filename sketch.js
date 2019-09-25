var fixrect,movingrect;
function setup() {

  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);

  fixrect=createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixrect.x<=movingrect.width/2+fixrect.width/2 &&
     fixrect.x-movingrect.x<=movingrect.width/2+fixrect.width/2 &&
     movingrect.y-fixrect.y<=movingrect.height/2+fixrect.height/2 &&
     fixrect.y-movingrect.y<=movingrect.height/2+fixrect.height/2 ){
movingrect.shapeColor="teal";
fixrect.shapeColor="teal";

  }  
  else{
    movingrect.shapeColor="pink";
    fixrect.shapeColor="pink";
    

  }
  drawSprites();
}