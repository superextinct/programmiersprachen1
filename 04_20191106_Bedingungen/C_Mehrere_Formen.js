function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 300) {
    circle(300, 200, 100);
  }

  if (mouseX > 250) {
    rect(300, 200, 100, 100);
  }

  if (mouseX > 200) {
    line(0, 0, width, height);
  }

  point(width/2, height/2);
}
