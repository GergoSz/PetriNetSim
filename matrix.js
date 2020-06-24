class Matrix {
	constructor(n, m) {
		this.n = n;
		this.m = m;
		this.vals = [];

		for (var i = 0; i < n; i++) {
			this.vals[i] = [];
			for (var j = 0; j < m; j++) {
				this.vals[i][j] = 0;
			}
		}
	}

	get getN() {
		return this.n;
	}

	get getM() {
		return this.m;
	}

	get getVals() {
		return this.vals;
	}

	getValueAtPosition(n, m) {
		return this.vals[n][m];
	}

	setValueAtPosition(n, m, newValue) {
		this.vals[n][m] = newValue;
	}

	static add(matrix1, matrix2) {
		if (matrix1.n !== matrix2.n || matrix1.m !== matrix2.m) {
			console.log("Error the matrix dimensions are NOT the same");
			return 0;
		} else {
			newMatrix = new Matrix(matrix1.n, matrix1.m);
			for (var i = 0; i < newMatrix.n; i++) {
				for (var j = 0; j < newMatrix.m; j++) {
					newMatrix.setValueAtPosition(
						i,
						j,
						matrix1.getValueAtPosition(i, j) +
							matrix2.getValueAtPosition(i, j)
					);
				}
			}
			return newMatrix;
		}
	}

	static multiply(matrix1, matrix2) {
		if (matrix1.m === matrix2.n) {
			newMatrix = new Matrix(matrix1.n, matrix2.m);
			for (var i = 0; i < matrix1.n; i++) {
				let temp = 0;
				for (var j = 0; j < matrix2.m; j++) {
					for (var k = 0; k < matrix1.m; k++)
						temp =
							matrix1.getValueAtPosition(i, k) *
							matrix2.getValueAtPosition(k, j);
					newMatrix.setValueAtPosition(
						i,
						k,
						newMatrix.getValueAtPosition + temp
					);
				}
			}
			return newMatrix;
		}
	}

	addToThis(otherMatrix) {
		if (otherMatrix.n !== this.n || otherMatrix.m !== this.m) {
			console.log("Error the matrix dimensions are NOT the same");
			return 0;
		} else {
			temp = otherMatrix.getVals;
			for (var i = 0; i < this.n; i++) {
				for (var j = 0; j < this.m; j++) {
					this.vals[i][j] = this.vals[i][j] + temp[i][j];
				}
			}
		}
	}
}
