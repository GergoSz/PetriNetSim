class Transition {
	constructor(x, y, transitionName) {
		this.x = x;
		this.y = y;
		this.a = 10;
		this.b = 40;
		this.transitionName = transitionName;
	}

	draw() {
		rect(this.x, this.y, this.a, this.b);
		text(this.transitionName, this.x - 15, this.y);
	}

	get getTokenCount() {
		return this.tokenCount;
	}

	get getTransitionName() {
		return this.transitionName;
	}

	get getX() {
		return this.x;
	}

	get getY() {
		return this.y;
	}

	set setTokenCount(tokenCount) {
		this.tokenCount = tokenCount;
	}

	set setTransitionName(transitionName) {
		this.transitionName = transitionName;
	}

	set setX(x) {
		this.x = x;
	}

	set setY(y) {
		this.y = y;
	}
}
