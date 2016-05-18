var Cat = (function() {
	var cats = [];

	function Cat(name, weight) {
		if (arguments.length < 2 || !name || !weight) { // FIXME new Cat(undefined, undefined) проходит проверку
			throw new Error('Cat should have name and weight');
		}

		Object.defineProperty(this, "weight", {
			get: function() {
				return weight;
			},
			set: function(newWeight) {
				weight = newWeight;
			}
		});

		Object.defineProperty(this, "name", {
			get: function() {
				return name;
			},
			set: function(newName) {
				name = newName;
			}
		});

		cats.push(this);
	}

	Cat.averageWeight = function() {
		return cats.reduce(function(totalWeight, curCat) {
			return totalWeight + curCat.weight;
		}, 0) / cats.length;
	};

	return Cat;
}()); 