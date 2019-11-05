function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  // Graue Füllfarbe mit Opazität
  fill(100, 100, 100, 50);

  // Größe des Kreises ist von der Mausposition abhängig
  var groesse = mouseX - mouseY;

  // Kreis mit berechneter Größe an die Mausposition zeichnen
  circle(mouseX, mouseY, groesse);
}

function mousePressed() {
  // Beim Mausklick wird ein neuer Hintergrund erstellt,
  // dadurch sind die Objekte darunter "verschwunden"
  background(220);
}
