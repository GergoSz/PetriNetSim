let canvas;

let placeTransitionMatrix = new Matrix(3, 4);
let stateVector = new Matrix(placeTransitionMatrix.getM, 1);

let places = [];
let transitions = [];
let arrows = [];

function setup() {
	centerCanvas();
	for (let n = 0; n < placeTransitionMatrix.getN; n++) {
		for (let m = 0; m < placeTransitionMatrix.getM; m++) {
			placeTransitionMatrix.setValueAtPosition(
				n,
				m,
				random(0, 1) > 0.5 ? Math.floor(random(-2, 2)) : 0
			);
		}
	}

	stateVector.setValueAtPosition(0, 0, 1);
	console.log(stateVector);
	console.log(placeTransitionMatrix.getVals);

	for (let n = 0; n < placeTransitionMatrix.getN; n++) {
		transitions.push(new Transition(200, n * 50 + 50, "T" + (n + 1)));
	}

	for (let m = 0; m < placeTransitionMatrix.getM; m++) {
		places.push(new Place(100, m * 50 + 50, "P" + (m + 1)));
	}

	for (let n = 0; n < placeTransitionMatrix.getN; n++) {
		for (let m = 0; m < placeTransitionMatrix.getM; m++) {
			if (placeTransitionMatrix.getValueAtPosition(n, m) !== 0) {
				arrows.push(
					new Arrow(
						places[m],
						transitions[n],
						placeTransitionMatrix.getValueAtPosition(n, m)
					)
				);
			}
		}
	}

	fill(180, 180, 180);
}

/*
function keyPressed() {
	if (key == " ")
	
}*/

function draw() {
	background(51, 51, 51);
	fill(180, 180, 180);

	transitions.forEach((transition) => {
		transition.draw();
	});

	places.forEach((place) => {
		place.draw();
	});

	arrows.forEach((arrow) => {
		arrow.draw();
	});

	for (let i = 0; i < stateVector.getVals.length; i++) {
		if (stateVector.getVals[i] != 0) {
			fill(0, 0, 0);
			text(stateVector.getVals[i], places[i].getX, places[i].getY);
		}
	}
}

function centerCanvas() {
	canvas = createCanvas(windowWidth, windowHeight - 100);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height + 100) / 2;
	canvas.position(x, y);
}

function windowResized() {
	centerCanvas();
}
