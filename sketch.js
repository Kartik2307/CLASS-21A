var fixedRect, movingRect;
var rect3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3 = createSprite(400, 200,80,30);
  rect3.shapeColor = "green";
  rect3.debug = true;

  
}

function draw() {
  background(0,0,0);  

movingRect.x=mouseX;
movingRect.y=mouseY;

if (istouching(rect3,movingRect)){
  rect3.shapeColor = "red";
  movingRect.shapeColor = "red";
}else{
  movingRect.shapeColor = "green";
  rect3.shapeColor = "green";
}

   drawSprites();
}
