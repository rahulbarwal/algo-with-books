var insert = function (array, rightIndex, value) {
  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }
  array[j + 1] = value;
};

var insertionSort = function (array) {
  //Write this method
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
  return array;
};

console.log(insertionSort([1, 3, 6, 7, 9, 2, 4]));
