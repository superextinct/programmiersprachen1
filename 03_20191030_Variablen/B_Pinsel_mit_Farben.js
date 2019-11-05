var farbe = "orange";

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(farbe);

  // Größe des Kreises ist von der Mausposition abhängig
  var groesse = mouseX - mouseY;

  // Kreis mit berechneter Größe an die Mausposition zeichnen
  circle(mouseX, mouseY, groesse);
}

// Farbe soll durch Mausklick geändert werden
function mousePressed() {
  if (farbe == "orange") {
    // Die Farbe ist orange, zu blau wechseln:
    farbe = "blue";
  } else if (farbe == "blue") {
    // Wenn die Farbe blau ist, zu türkis wechseln:
    farbe = "cyan";
  } else {
    // Im Normalfall zu Orange wechseln:
    farbe = "orange";
  }
}
