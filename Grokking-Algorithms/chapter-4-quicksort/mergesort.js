const merge = (arr1, arr2) => {
  const newArr = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    while (arr1[i] < arr2[j] && i < arr1.length) {
      newArr.push(arr1[i]);
      i++;
    }
    while (arr1[i] > arr2[j] && j < arr2.length) {
      newArr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    while (i < arr1.length) {
      newArr.push(arr1[i]);
      i++;
    }
  } else if (j < arr2.length) {
    while (j < arr2.length) {
      newArr.push(arr2[j]);
      j++;
    }
  }
  return newArr;
};
/**
 *
 * @param {number[]} arr
 */
const mergesort = (arr, startIndex, endIndex) => {
  startIndex = startIndex || 0;
  endIndex = endIndex || arr.length;
  const len = endIndex - startIndex;
  if (len <= 1) {
    return;
  }
  if (len === 2) {
    if (arr[startIndex] > arr[endIndex - 1]) {
      [arr[startIndex], arr[endIndex - 1]] = [
        arr[endIndex - 1],
        arr[startIndex],
      ];
    }
    return;
  }
  const mid = startIndex + Math.floor(len / 2);
  mergesort(arr, startIndex, mid);
  mergesort(arr, mid, endIndex);
  const sorted = merge(arr.slice(startIndex, mid), arr.slice(mid, endIndex));
  arr.splice(startIndex, len, ...sorted);
};

const arr = [4, 3, 6, 1, 5, 9, 2];
mergesort(arr);
console.log(arr);
