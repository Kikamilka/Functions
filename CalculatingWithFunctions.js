function zero(f) {
	// можно было короче так записать:
	//return f ? f(0) : 0;
  if (f == null) { 
    return 0; 
  }
  else { 
    return f(0); 
  }
}
function one(f) {
  if (f == null) { 
    return 1; 
  }
  else { 
    return f(1); 
  }
}
function two(f)  {
  if (f == null) { 
    return 2; 
  }
  else { 
    return f(2); 
  }
}
function three(f)  {
  if (f == null) { 
    return 3; 
  }
  else { 
    return f(3); 
  }
}
function four(f)  {
  if (f == null) { 
    return 4; 
  }
  else { 
    return f(4); 
  }
}
function five(f)  {
  if (f == null) { 
    return 5; 
  }
  else { 
    return f(5); 
  }
}
function six(f)  {
  if (f == null) { 
    return 6; 
  }
  else { 
    return f(6); 
  }
}
function seven(f) {
  if (f == null) { 
    return 7; 
  }
  else { 
    return f(7); 
  }
}
function eight(f)  {
  if (f == null) { 
    return 8; 
  }
  else { 
    return f(8); 
  }
}
function nine(f)  {
  if (f == null) { 
    return 9; 
  }
  else { 
    return f(9); 
  }
}

/* красивый вариант для всех сразу:
function number(n) {
  return function(f) {
    return f? f(n) : n;
  };
}*/

function plus(b) {
  return function(a) {return a + b;};
}
function minus(b) {
  return function(a) {return a - b;};
}
function times(b) {
  return function(a) {return a * b;};
}
function dividedBy(b) {
  return function(a) {return a / b;};
}