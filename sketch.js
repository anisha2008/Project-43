var hr;
var min;
var sec;



function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES)
}

function draw() {
  background("black"); 
     translate(200,200)
     rotate(-90)
     console.log(hr)

  hr=hour();
  min=minute();
  sec=second();

  scAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hr % 12,0,12,0,360)

  push();
  rotate(scAngle)
  stroke("red")
  strokeWeight(5)
  line(0,0,130,0)
  pop()

  push()
  rotate(minAngle)
  stroke("yellow")
  strokeWeight(5)
  line(0,0,100,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("lightgreen")
  strokeWeight(5)
  line(0,0,50,0)
  pop()

  drawSprites();
  
  noFill()
  stroke("red")
  strokeWeight(3)
  arc(0,0,300,300,0,scAngle)

  noFill()
  stroke("yellow")
  strokeWeight(3)
  arc(0,0,280,280,0,minAngle)

  noFill()
  stroke("lightgreen")
  strokeWeight(3)
  arc(0,0,260,260,0,hrAngle)




}