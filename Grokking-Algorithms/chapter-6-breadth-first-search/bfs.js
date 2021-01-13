/**
 *
 * @param {Map<string, string[]>} graph
 */
const bfs = (graph) => {
  const visited = [];
  const queue = [];

  for (const key of graph.keys()) {
    if (!visited.includes(key)) {
      queue.push(key);
      while (queue.length > 0) {
        const node = queue.shift();
        if (!visited.includes(key)) {
          queue.push(...graph.get(node));
          visited.push(key);
          console.log(key);
        }
      }
    }
  }
};

const graph = new Map();
graph.set('a', ['b', 'c']);
graph.set('b', ['c', 'd']);
graph.set('c', []);
graph.set('d', ['a']);
bfs(graph);
console.log('**********Done');
