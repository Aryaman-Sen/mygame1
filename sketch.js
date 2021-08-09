var bg,bgImg;
var shooter,shooterImg,shooterImg2,shooterImg3
var zombie1, zombie2,zombie3,zombie4;
var zombie1I, zombie2I,zombie3I,zombie4I;
var bullet,bulletImg;
var alert,alertImg;
var barricade,barricadeImg;


function preload(){
  bgImg=loadImage("assets/battlfield.jpg");
  shooterImg=loadImage("assets/shooter_1.png");
  shooterImg2=loadImage("assets/shooter_2.png");
  shooterImg3=loadImage("assets/shooter_3.png");
  zombie1I=loadImage("assets/zombie.png");
  zombie2I=loadImage("assets/zombie2.png");
  zombie3I=loadImage("assets/zombie3.png");
  zombie4I=loadImage("assets/zommbie1.png");
  alertImg=loadImage("assets/zombiealert.png");
  barricadeImg=loadImage("assets/barricade.png");
  bullet=loadImage("assets/bullet.png");
}


function setup() {

  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 2.4;





}

function draw() {
  background(0);  






  drawSprites();
}