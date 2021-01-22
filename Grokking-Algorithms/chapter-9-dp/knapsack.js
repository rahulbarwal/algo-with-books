/**
 *
 * @param {number[]} weights
 * @param {number[]} values
 */
const knapsack = (weights, values, capacity) => {
  const grid = new Array(weights.length);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(capacity).fill(0);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0) {
        if (j + 1 >= weights[i]) {
          grid[i][j] = values[i];
        }
      } else if (j === 0) {
        if (values[i] > grid[i - 1][j] && weights[i] <= j + 1) {
          grid[i][j] = values[i];
        } else {
          grid[i][j] = grid[i - 1][j];
        }
      } else {
        grid[i][j] = Math.max(
          grid[i - 1][j],
          j > weights[i] ? values[i] + grid[i - 1][j - weights[i]] : values[i],
        );
      }
    }
  }
  console.log(grid);
  return grid[grid.length - 1][grid[0].length - 1];
};

// const weights = [2, 3, 1, 4];
const weights = [1, 2, 3];
// const values = [4, 5, 3, 7];
const values = [6, 10, 12];

console.log(knapsack(weights, values, 5));
