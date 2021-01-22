/**
 *
 * @param {number[]} arr
 */
const quicksort = (arr, startIndex, endIndex) => {
  if (endIndex - startIndex <= 1) {
    return;
  }
  startIndex = startIndex || 0;
  endIndex = endIndex || arr.length - 1;
  const pivot = arr[startIndex];
  let j = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  quicksort(arr, startIndex, j - 1);
  quicksort(arr, j + 1, endIndex);
  return arr;
};
const arr = [4, 3, 6, 1, 5, 9, 2];
quicksort(arr);
console.log(arr);
