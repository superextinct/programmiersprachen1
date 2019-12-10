var squareSize = 100;

function setup() {
  createCanvas(400, 400);
  fill(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background("white");

  // push() und pop() ergeben nur zusammen Sinn:
  // push() speichert den Zeichenstil (= fill, stroke, strokeWeight, rectMode, translate, ...)
  // pop() stellt den gespeicherten Zeichenstil wieder her

  push();
  // Rotationsursprung 100|100
  translate(100,100);
  rotate(frameCount);
  square(0, 0, squareSize);
  pop();

  push();
  // Rotationsursprung 300|100
  translate(300,100);
  rotate(frameCount/2);
  square(0, 0, squareSize);
  pop();

  push();
  // Rotationsursprung 100|300
  translate(100,300);
  rotate(frameCount/3);
  square(0, 0, squareSize);
  pop();

  push();
  // Rotationsursprung 300|300
  translate(300,300);
  rotate(frameCount/4);
  square(0, 0, squareSize);
  pop();
}
