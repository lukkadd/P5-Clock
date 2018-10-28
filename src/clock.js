function Clock(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;

	this.hsize = r * .50;
	this.msize = r * .75;
	this.ssize = r * .80;

	this.hx = 0;
	this.hy = 0;

	this.mx = 0;
	this.my = 0;
	
	this.sx = 0;
	this.sy = 0;

	this.update = function(hour,minute,second){

		this.sx = this.x + this.ssize*cos(second*TWO_PI / 60 - HALF_PI);
		this.sy = this.y + this.ssize*sin(second*TWO_PI / 60 - HALF_PI);

		this.mx = this.x 
			+ this.msize*cos(
				minute*TWO_PI/60 
				+ second*TWO_PI/3600 
				- HALF_PI
				);
		this.my = this.y 
			+ this.msize*sin(
				minute*TWO_PI/60 
				+ second*TWO_PI/3600
				- HALF_PI);

		this.hx = this.x 
			+ this.hsize*cos(
				(hour%12)*TWO_PI/12 
				+ minute*TWO_PI/720
				+ second*TWO_PI/43200
				- HALF_PI);
		this.hy = this.y 
			+ this.hsize*sin(
				(hour%12)*TWO_PI/12 
				+ minute*TWO_PI/720 
				+ second*TWO_PI/43200
				- HALF_PI);

		}

	this.show = function(){
		push();

		//render main clock body
		strokeWeight(5);
		ellipse(this.x,this.y,this.r*2);
		
		//render number markings
		textAlign(CENTER,CENTER);
		textSize(this.r * 0.15);
		for (var i = 12; i > 0; i--) {
			text(
				i,
				this.x + this.r*.83*cos(i*TWO_PI/12 - HALF_PI),
				this.y + this.r*.83*sin(i*TWO_PI/12 - HALF_PI)
				);
		}
		//render line markings
		for (var i = 0; i < 60; i++) {
			if(i%5 == 0){
				strokeWeight(2);
			}else{
				strokeWeight(1);
			}
			line(
				this.x + this.r * 0.9 *cos(i*TWO_PI/60 - HALF_PI),
				this.y + this.r * 0.9 *sin(i*TWO_PI/60 - HALF_PI),
				this.x + this.r * 0.95*cos(i*TWO_PI/60 - HALF_PI),
				this.y + this.r * 0.95*sin(i*TWO_PI/60 - HALF_PI)
				)
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