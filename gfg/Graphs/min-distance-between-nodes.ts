type Graph = Record<number, number[]>;
function minDistanceWithDFS(graph: Graph) {
  const visited: Record<number, boolean> = {};
  const distance: Record<number, number> = {};

  function BFS(node: number) {
    const queue = [node];
    distance[node] = 0;
    visited[node] = true;

    while (queue.length != 0) {
      const curr = queue.shift();
      if (curr !== undefined) {
        for (const n of graph[curr]) {
          if (!visited[n]) {
            distance[n] = distance[curr] + 1;
            queue.push(n);
            visited[n] = true;
          }
        }
      }
    }
  }

  for (const key of Object.keys(graph)) {
    if (!visited[+key]) {
      BFS(+key);
    }
  }
  return distance;
}

const graph: Graph = {
  0: [1, 2],
  1: [0, 2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

console.log(minDistanceWithDFS(graph));
