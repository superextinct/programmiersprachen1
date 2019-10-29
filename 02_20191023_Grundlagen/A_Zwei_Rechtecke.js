function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  
  // Weißes Rechteck mit schwarzer Kontur
  fill(255);
  stroke(0);
  strokeWeight(10);
  rect(100, 50, 200, 300);

  // Schwarzes Rechteck ohne Kontur
  fill(0);
  noStroke();
  rect(350, 250, 50, 250);
}
