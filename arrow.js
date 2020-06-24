class Arrow {
	constructor(place, transition, weight) {
		this.place = place;
		this.transition = transition;
		this.weight = weight;
	}

	draw() {
		//stroke(0);
		push();
		if (this.weight > 0) {
			line(
				this.place.getX,
				this.place.getY,
				this.transition.getX,
				this.transition.getY
			);
			//ellipse(this.transition.getX, this.transition.getY, 15);

			var angle = atan2(
				this.place.getY - this.transition.getY,
				this.place.getX - this.transition.getX
			);
			var offset = 10;
			translate(this.transition.getX, this.transition.getY);
			rotate(angle - HALF_PI);
			triangle(
				-offset * 0.5,
				offset,
				offset * 0.5,
				offset,
				0,
				-offset / 2
			);
			/*triangle(
				this.transition.getX + 10,
				this.transition.getY + 10,
				this.transition.getX - 10,
				this.transition.getY + 10,
				this.transition.getX + 10,
				this.transition.getY - 10
			);*/
		} else {
			line(
				this.transition.getX,
				this.transition.getY,
				this.place.getX,
				this.place.getY
			);
			//ellipse(this.place.getX, this.place.getY, 15);

			var angle = atan2(
				this.transition.getY - this.place.getY,
				this.transition.getX - this.place.getX
			);
			var offset = 10;
			translate(this.place.getX, this.place.getY);
			rotate(angle - HALF_PI);
			triangle(
				-offset * 0.5,
				offset,
				offset * 0.5,
				offset,
				0,
				-offset / 2
			);

			/*triangle(
				this.place.getX + 10,
				this.place.getY + 10,
				this.place.getX - 10,
				this.place.getY + 10,
				this.place.getX + 10,
				this.place.getY - 10
			);*/
		}

		text(this.weight, (this.x + this.px) / 2, (this.y + this.py) / 2);
		pop();
	}

	get getWeight() {
		return this.weight;
	}

	set setWeight(weight) {
		this.weight = weight;
	}
}
