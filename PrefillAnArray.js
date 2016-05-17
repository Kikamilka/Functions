function prefill(n, v) {
	var num = parseInt(n);
	if (isNaN(num) != n < 0 || n != num) 
		throw new TypeError(n + ' is invalid');
	return Array.apply(null, Array(num)).map(function() {
		return v
	});
}