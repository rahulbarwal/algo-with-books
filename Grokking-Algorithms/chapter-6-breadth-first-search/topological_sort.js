/**
 *
 * @param {Map} graph
 * @param {string} graphNode
 * @param {string[]} stack
 * @param {string[]} visited
 */
const topSort = (graph, graphNode, stack, visited) => {
  for (const node of graph.get(graphNode)) {
    if (!visited.includes(node)) {
      visited.push(node);
      topSort(graph, node, stack, visited);
    }
  }
  stack.push(graphNode);
};

const topologicalSort = (graph) => {
  const visited = [],
    stack = [];
  for (const key of graph.keys()) {
    if (!visited.includes(key)) {
      topSort(graph, key, stack, visited);
    }
  }
  return stack.reduceRight((p, cv) => `${p} ${cv}`);
};

const graph = new Map();
graph.set('a', ['b', 'c']);
graph.set('b', ['d']);
graph.set('c', ['d']);
graph.set('d', ['e']);
graph.set('e', []);
graph.set('f', ['e']);
graph.set('g', ['e', 'i', 'h']);
graph.set('h', []);
graph.set('i', []);
graph.set('j', ['h']);

console.log('********** \n', topologicalSort(graph), '\n***********');
