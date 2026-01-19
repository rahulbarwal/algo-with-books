type Graph = Record<number, number[]>;
function detectCycle(graph: Graph) {
  const visited: Record<number, boolean> = {};
  function DFS(node: number, parent: number) {
    if (visited[node]) {
      return;
    }
    visited[node] = true;
    for (const n of graph[node]) {
      if (!visited[n]) {
        if (DFS(n, node) === true) {
          return true;
        }
      } else if (n !== parent) {
        return true;
      }
    }
    return false;
  }
  for (const key of Object.keys(graph)) {
    if (!visited[+key]) {
      if (DFS(+key, -1) === true) {
        return true;
      }
    }
  }
  return false;
}
const graph1: Graph = {
  0: [1, 2],
  1: [0, 2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};
const graph2: Graph = {
  0: [1, 2],
  1: [0],
  2: [0],
};

console.log(detectCycle(graph1));
console.log(detectCycle(graph2));
