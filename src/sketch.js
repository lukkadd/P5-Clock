let clock;
function setup() {
  createCanvas(300,300);
  clock = new Clock(150,150,200);
}

function draw() {
	background(51);
	text("Hora: "+ hour(),20,275);

	text("Minuto: "+ minute(),100,275);

	text("Segundo: "+ second(),180,275);

	clock.update(hour(),minute(),second());

	clock.show();
}