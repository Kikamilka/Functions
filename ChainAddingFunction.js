var add = function (first) {
	var innerSum = function (nextValue) {
		var res;
		if (parseInt(nextValue + '', 10) == nextValue)
			res = first + nextValue;
		else 
			res = first;
		return add(res);
	};
	innerSum.valueOf = function () {
		return first;
	};	
	return innerSum;
};

/* это понятнее:
function add(n){
  var fn = function(x) {
    return add(n + x);
  };  
  fn.valueOf = function() {
    return n;
  };  
  return fn;
}
*/