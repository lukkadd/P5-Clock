function Clock(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;

	this.hx = 0;
	this.hy = 0;

	this.mx = 0;
	this.my = 0;
	
	this.sx = 0;
	this.sy = 0;

	this.update = function(hour,minute,second){

		this.sx = this.x + 70*cos(second*TWO_PI / 60 - HALF_PI);
		this.sy = this.y + 70*sin(second*TWO_PI / 60 - HALF_PI);

		this.mx = this.x 
			+ 75*cos(
				minute*TWO_PI/60 
				+ second*TWO_PI/3600 
				- HALF_PI
				);
		this.my = this.y 
			+ 75*sin(
				minute*TWO_PI/60 
				+ second*TWO_PI/3600
				- HALF_PI);

		this.hx = this.x 
			+ 60*cos(
				(hour%12)*TWO_PI/12 
				+ minute*TWO_PI/720
				+ second*TWO_PI/43200
				- HALF_PI);
		this.hy = this.y 
			+ 60*sin(
				(hour%12)*TWO_PI/12 
				+ minute*TWO_PI/720 
				+ second*TWO_PI/43200
				- HALF_PI);

		}

	this.show = function(){
		push();

		//render main clock body
		strokeWeight(5);
		ellipse(this.x,this.y,this.r);
		//render number markings
		textAlign(CENTER);
		for (var i = 12; i > 0; i--) {
			text(
				i,
				this.x + 85*cos(i*TWO_PI/12 - HALF_PI),
				this.y + 85*sin(i*TWO_PI/12 - HALF_PI)
				);
		}
		//render hours hand
		strokeWeight(3);
		line(this.x,this.y,this.hx,this.hy);
		//render minutes hand
		strokeWeight(2);
		line(this.x,this.y,this.mx,this.my);
		//render seconds hand
		strokeWeight(1);
		line(this.x,this.y,this.sx,this.sy);

		pop();
	}
}