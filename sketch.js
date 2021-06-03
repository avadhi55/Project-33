const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var snowflakes = [];
var bg

function preload(){
bg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  

}

function draw() {
  background(bg); 
   Engine.update(engine);
// creating both types of snowflakes
if(frameCount%20===0){
  snowflakes.push(new SnowFlakes2(600,2));
}

if(frameCount%40===0){
  snowflakes.push(new SnowFlakes1(650,2));
}

if(frameCount%60===0){
      snowflakes.push(new SnowFlakes1(50,4));
}

if(frameCount%80===0){
  snowflakes.push(new SnowFlakes2(300,4));
}

if(frameCount%100===0){
  snowflakes.push(new SnowFlakes1(500,6));
}

if(frameCount%120===0){
  snowflakes.push(new SnowFlakes2(700,6));
}

if(frameCount%140===0){
  snowflakes.push(new SnowFlakes1(350,8));
}

if(frameCount%160===0){
  snowflakes.push(new SnowFlakes2(750,8));
}

if(frameCount%180===0){
  snowflakes.push(new SnowFlakes2(150,10));
}

if(frameCount%200===0){
snowflakes.push(new SnowFlakes1(400,10));
}

if(frameCount%220===0){
  snowflakes.push(new SnowFlakes2(150,12));
}

if(frameCount%240===0){
snowflakes.push(new SnowFlakes1(400,12));
}

if(frameCount%260===0){
  snowflakes.push(new SnowFlakes1(550,14));
}

if(frameCount%280===0){
  snowflakes.push(new SnowFlakes2(450,14));
}

if(frameCount%300===0){
  snowflakes.push(new SnowFlakes2(500,16));
}

if(frameCount%320===0){
  snowflakes.push(new SnowFlakes1(250,16));
}


if(frameCount%340===0){
  snowflakes.push(new SnowFlakes1(100,18));
}

if(frameCount%360===0){
  snowflakes.push(new SnowFlakes2(200,18));
}

if(frameCount%380===0){
  snowflakes.push(new SnowFlakes1(100,20));
}

if(frameCount%400===0){
  snowflakes.push(new SnowFlakes2(200,20));
}

// displaying the snowflakes
for (var l= 0; l < snowflakes.length; l++) {
    snowflakes[l].display();
}


}
