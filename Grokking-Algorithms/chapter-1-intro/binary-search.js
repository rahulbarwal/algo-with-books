/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  while (min <= max) {
    var guess = Math.floor((min + max) / 2);
    if (array[guess] == targetValue) {
      return guess;
    }
    if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};
