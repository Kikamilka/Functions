function partitionOn(pred, items) {
  var fResult = items.filter(function(item){return !pred(item)});
  var tResult = items.filter(pred);
  items.length=0;
  fResult.forEach(function(item, i, fResult){items.push(item)});
  tResult.forEach(function(item, i, tResult){items.push(item)});
  return fResult.length;
}