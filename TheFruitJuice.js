function Jar() {
	this.fruits = [];
	this.totalAmount = 0;
}

Jar.prototype.add = function(amount, type) {
	if (!this.fruits[type]) {
		this.fruits[type] = 0; 
	}
	this.fruits[type] += amount;
	this.totalAmount += amount;
};

Jar.prototype.pourOut = function(amount) {
	var typeFruit;
	for (typeFruit in this.fruits) {
			this.fruits[typeFruit] -= amount * this.getConcentration(typeFruit);
	}
	this.totalAmount -= amount;
};

Jar.prototype.getTotalAmount = function() {
	return this.totalAmount;
};

Jar.prototype.getConcentration = function(type) {
	if (!this.fruits[type] || this.totalAmount === 0) 
		return 0;
	else 
		return (this.fruits[type] / this.totalAmount);
}