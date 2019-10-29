function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  // Ein schwarzes großes Quadrat
  fill("black");
  strokeWeight(20);
  stroke(250);
  rect(100, 100, 200, 200);

  // Ein kleines graues Quadrat ohne Kontur
  fill(160);
  noStroke();
  rect(150, 150, 100, 100);
}
