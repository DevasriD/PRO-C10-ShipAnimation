var ship, ship_img
var sea, sea_img
function preload(){
  sea_img = loadImage("sea.png")
  ship_img = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,10,10)
  sea.scale=0.25
  sea.addImage(sea_img);
  sea.velocityX=-3
  ship = createSprite(200,200,10,10)
  ship.scale=0.25
  ship.addAnimation("Ship", ship_img);
}

function draw() {
  background("blue");
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites()
}