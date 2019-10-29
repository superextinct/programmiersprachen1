function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  // Mitte selbst ausrechnen: 500 / 2 = 250
  var mitte = 250;

  // oder Mitte berechnen mit p5 Variable "width"
  var mitte = width / 2;

  // Aussehen
  noStroke();
  fill(0);

  // Zylinder
  rectMode(CENTER);
  rect(mitte, 80, 80, 80);
  rect(mitte, 120, 120, 20);

  // Körper
  ellipse(mitte, 150, 100);
  ellipse(mitte, 250, 150);
  ellipse(mitte, 350, 200);
}
