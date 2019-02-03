function Pipe() {
	this.top = random(50,height-200);
	this.bottom = height - this.top;
	this.x = width;
	this.w = 90;
	this.velocity = 2;
	this.show = function() {
		fill(255);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, this.top+150, this.w, this.bottom);
	}

	this.update = function() {
		this.x -= this.velocity;
	}
}