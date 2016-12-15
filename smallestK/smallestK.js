//create a function that returns the smallest k numbers in an array
var smallestK = function(k, arr) {
  var sortedArr = arr.sort(function(a,b) {
    return a-b;
  })
  var smallestKResult = [];
  for(var i = 0; i < k; i++) {
    smallestKResult.push(sortedArr[i]);
  }
  return smallestKResult;
}
console.log(smallestK(4, [1,6,9,7,42,67,87,4]));
