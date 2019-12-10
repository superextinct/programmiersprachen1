var gap = 20;

function setup() {
  createCanvas(620, 420)
  fill(255);
  noStroke();
  background(0);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  for (var y = 20; y < height; y += gap) {
    for (var x = 20; x < width; x += gap) {
      // Zufällige Zahl generieren
      let r = random(0, 10);

      // Je nachdem was für eine Zahl generiert wurde, eine andere Figur zeichnen
      if (r <= 4) {
        ellipse(x, y, 18, 18);
      } else if (r > 4 && r < 8) {
        rect(x, y, 18, 18);
      } else if (r >= 8) {
        cross(x, y, 20, 5);
      }
    }
  }
}

function cross(x, y, a, b) {
  push();
  translate(x, y);
  rotate(PI / 4.0);
  rect(0, 0, a, b);
  rect(0, 0, b, a);
  pop();
}
