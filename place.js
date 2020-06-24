class Place {
	constructor(x, y, placeName) {
		this.x = x;
		this.y = y;
		this.r = 40;
		this.tokenCount = 0;
		this.placeName = placeName;
	}

	draw() {
		ellipse(this.x, this.y, this.r);
		text(this.placeName, this.x - 40, this.y - 15);
	}

	get getTokenCount() {
		return this.tokenCount;
	}

	get getPlaceName() {
		return this.placeName;
	}

	get getX() {
		return this.x;
	}

	get getY() {
		return this.y;
	}

	get getR() {
		return this.r;
	}

	set setTokenCount(tokenCount) {
		this.tokenCount = tokenCount;
	}

	set setPlaceName(placeName) {
		this.placeName = placeName;
	}

	set setX(x) {
		this.x = x;
	}

	set setY(y) {
		this.y = y;
	}

	set setR(r) {
		this.r = r;
	}
}
