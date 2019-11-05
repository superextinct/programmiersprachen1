var farbe = "orange";

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(farbe);

  // Größe der Form ist von der Mausposition abhängig
  var groesse = mouseX - mouseY;

  //Nur Zeichnen, wenn die Maus gedrückt ist
  if (mouseIsPressed) {
    if (farbe=="orange") {
      // Wenn die aktuelle Farbe "orange" ist, soll ein Kreis gezeichnet werden:
      circle(mouseX, mouseY, groesse);
    } else {
      // Bei blau oder türkis soll ein Rechteck gezeichnet werden:
      rectMode(CENTER);
      rect(mouseX, mouseY, groesse, groesse);
    }

  }
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
