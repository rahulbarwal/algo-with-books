/**
 *
 * @param {string} s1
 * @param {string} s2
 */
const maxSubString = (s1, s2) => {
  const grid = new Array(s1.length);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(s2.length);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 || j === 0) {
        if (s1[i] === s2[j]) {
          grid[i][j] = 1;
        } else {
          grid[i][j] = 0;
        }
      } else {
        grid[i][j] = Math.max(
          (s1[i] === s2[j] ? 1 : 0) + grid[i - 1][j - 1],
          grid[i - 1][j],
          grid[i][j - 1],
        );
      }
    }
  }
  //   console.log(grid);
  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(maxSubString('rahul', 'vivek'));
console.log(maxSubString('rahul', 'srahndhyal'));
