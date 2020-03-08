let sum
exports.min = function min (array) {
  if (array === undefined) return 0;
  let result = 0;
  let firstIter = true;
  for (item of array){
    if (firstIter || (result > item)) result = item;
    firstIter = false;
  }
  return result;
}

exports.max = function max (array) {
  if (array === undefined) return 0;
  let result = 0;
  let firstIter = true;
  for (item of array){
    if (firstIter || (result < item)) result = item;
    firstIter = false;
  }
  return result;
}

exports.avg = function avg (array) {
  if (array === undefined) return 0;
  if (array.length == 0) return 0;
  let result = 0;
  for (item of array){
    result += item;
  }
  result /= array.length;
  return result;
}
