var x = 0;

function setup() {
  createCanvas(600, 400);
  stroke(255);
  strokeWeight(4);
  noFill();
}

function draw() {
  background(0);

  ellipse(x + 50, 200, 25, 25);
  ellipse(x + 50, 200, 25, 25);
  ellipse(x + 50, 200, 25, 25);

  /*
  var x = 0;
  ellipse(x, 200, 25, 25);
  x = x + 50;

  ellipse(x, 200, 25, 25);
  x = x + 50;
  */

  /*
  while(x<width) {
    ellipse(x, 200, 25, 25);
    x = x + 50;
  }
  */

  /*
  for(var x=0; x<=width; x++) {
    ellipse(x, 200, 25, 25);
  }
  */
}
