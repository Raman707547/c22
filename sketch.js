const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var myEngine,myWorld;
var ground;
var box;
function setup() {
  createCanvas(400,400);
myEngine= Engine.create();
myWorld= myEngine.world;

var ground_options= {
  isStatic: true
}
ground= Bodies.rectangle(200,390,400,20,ground_options);
World.add(myWorld,ground);
console.log(ground);
var options={
  restitution:1.0
}
box=Bodies.circle(200,100,20,options)
World.add(myWorld,box)
}

function draw() {
  Engine.update(myEngine);
  background(0);  
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(RADIUS)
 ellipse(box.position.x,box.position.y,20,20);


}