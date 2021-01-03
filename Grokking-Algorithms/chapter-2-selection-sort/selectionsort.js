const selectionSort = (arr) => {
  const newArr = [];
  let i = 0;
  const lastIndex = arr.length;
  while (i < lastIndex) {
    let min = Math.min(...arr);
    newArr.push(min);
    arr.splice(arr.indexOf(min), 1);
    i++;
  }
  return newArr;
};
const selectionSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};

console.log(selectionSort([4, 2, 7, 1, 8, 3]));
console.log(selectionSort2([4, 2, 7, 1, 8, 3]));
