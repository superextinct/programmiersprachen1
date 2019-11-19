var x = 0;
var speed = 0.1;

function setup() {
  createCanvas(600, 400);
  stroke(255);
  strokeWeight(4);
  noFill();
}

function draw() {
  background(0);

  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -1;
  }

  x = x + speed;
}
