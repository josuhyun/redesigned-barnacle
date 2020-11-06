var particles[];

function setup() {
  createCanvas(640,360);
  for(var i = 0; i<10; i++){
    particles[i] = new Particle(random(width),random(height),random(1,6));
  let c = color(random(0,255),random(0,255),random(0,255));
  fill(c);
  noStroke();
}


  

function mousePressed(){
  var p = new Particle(mouseX,mouseY,random(1,6));
  particles.push(p);
}

function draw() {
  background(51);
  var wind = createVector(0.5,0);
  for(var i = 0; i<10;i++){
  
  var gravity = createVector(0,0.2*particles[i].mass);
  particle.applyForce(gravity);
  if(mouseIsPressed)
  particles[i].applyForce(wind);
  }
  particles[i].update();
  particle[i].display();
}