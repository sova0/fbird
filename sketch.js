var bird;
var pipes = [];

function setup() {
	createCanvas(400,600);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(0);
	bird.update();
	bird.show();
	
	if(frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}

	for (var i = 0; i<pipes.length; i++) {
		pipes[i].show();
		pipes[i].update();
	}
}

function keyPressed() {
	if(key = ' ') {
		bird.up();
	}
}