function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  // DEGREES oder RADIANS
  // standardmäßig auf Radianten gestellt
  angleMode(DEGREES);
  fill(0);
}

function draw() {
  background(255);

  // Neuen Ursprungspunkt setzen = Ankerpunkt für Rotation
  translate(200,200);

  rotate(mouseX/200);
  //rotate(45);
  //rotate(frameCount/3);

  scale(1.5);
  //scale(0.5, 1);

  shear(10);

  square(0,0,200);
}
