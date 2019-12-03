var groesse;

function setup() {
  createCanvas(600, 400);
  stroke(255);
  strokeWeight(4);
  noFill();
}

function draw() {
  background(0);

  for(var x=50; x<width; x+=50) {
    groesse = map(mouseX, 0, width, 4, 200);
    circle(x, 200, groesse);
  }
}
