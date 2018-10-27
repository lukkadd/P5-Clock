function setup() {
  createCanvas(300,300);
}

function draw() {
	background(51);
	text("Hora: "+ hour(),100,100);

	text("Minuto: "+ minute(),100,150);

	text("Segundo: "+ second(),100,200);
}