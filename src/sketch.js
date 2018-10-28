let clock;
function setup() {
  createCanvas(300,300);
  clock = new Clock(150,150,100);
}

function draw() {
	background(61);
	//debug text
	push();
	fill(255);
	text("Hora: "+ hour(),20,275);
	text("Minuto: "+ minute(),100,275);
	text("Segundo: "+ second(),180,275);
	pop();
	
	//updating and rendering clock
	clock.update(hour(),minute(),second());

	clock.show();
}