function setup() {
  createCanvas(400, 400);

  // Aussehen
  noFill();
  strokeWeight(10);
  stroke("white");
}

function draw() {
  background(0);

  ellipse(width/2, 260, 220, 220);

  // Zur besseren Lesbarkeit jeder Punkt (x, y) in neuer Zeile
  triangle(
    width/2, 20,
    width-20, height-30,
    20, height-30
  );

  line(width/2, 20, width/2, height-30);
}
