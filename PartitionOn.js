function partitionOn(pred, items) {
  var fResult = [];
  var tResult = [];
  var i = 0;
  for (var item = 0; item < items.length; item ++) {
    if (!pred(items[item])) {
      fResult.push (items[item]);
      i++;
    }
    else {
      tResult.push (items[item]);
    }
  }
  for (var index = 0; index < i; index ++) {
    items[index] = fResult[index];
  }
  var tempIndex = 0;
  for (var index = i; index < items.length; index ++) {
    items[index] = tResult[tempIndex];
    tempIndex++;
  }
  return i;
}

