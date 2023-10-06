var bkImg;
var donut;
var dImg;

function preload(){
bkImg=loadImage("bg.jpg");
dImg=loadImage("donut.png")
}

function setup(){
createCanvas(1355,570);

donut=createSprite(650,530,20,20);
donut.addImage("d1",dImg);
donut.scale=0.2;



}

function draw(){
background(bkImg);

if(keyDown("left")){
  donut.x-=10;
}
if(keyDown("right")){
    donut.x+=10;
  }
  if(keyDown("up")){
    donut.y-=10;
  }
  if(keyDown("down")){
    donut.y+=10;
  }

drawSprites();
}