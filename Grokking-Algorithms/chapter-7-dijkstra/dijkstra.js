const findNextNodeToProcess = (map, processed) => {
  let leastNode = null;
  let leastDistance = Number.POSITIVE_INFINITY;
  for (const [key, values] of map.entries()) {
    if (leastDistance > values.distance && !processed.includes(key)) {
      leastNode = key;
      leastDistance = values.distance;
    }
  }
  return leastNode;
};
const dijkstra = (graph, start) => {
  //   1. create a hashtable to store the distance and parent of each node
  const distanceParentMap = new Map();
  const processed = [];
  for (const nodes of graph.get(start)) {
    //      a. Update starting neighbours
    distanceParentMap.set(nodes[0], { distance: nodes[1], parent: start });
  }

  for (const key of graph.keys()) {
    if (!distanceParentMap.has(key)) {
      distanceParentMap.set(key, {
        parent: null,
        distance: Number.POSITIVE_INFINITY,
      });
    }
  }
  //   2. get  node of least distance.
  let next = findNextNodeToProcess(distanceParentMap, processed);
  //   3. update all its neighbours and parents as required.
  do {
    const nextDisParent = distanceParentMap.get(next);
    for (const val of graph.get(next)) {
      const currentDisParent = distanceParentMap.get(val[0]);
      if (currentDisParent.distance > nextDisParent.distance + val[1]) {
        distanceParentMap.set(val[0], {
          distance: nextDisParent.distance + val[1],
          parent: next,
        });
      }
    }
    processed.push(next);
    //   4. Repeat untill all are processed
    next = findNextNodeToProcess(distanceParentMap, processed);
  } while (next !== null);
  return distanceParentMap;
};

const calculatePath = (graph) => {
  const distanceMap = dijkstra(graph, 'start');
  let next = distanceMap.get('finish');
  let finalPath = 'finish';
  while (next.parent !== 'start') {
    finalPath = `${next.parent} > ${finalPath}`;
    next = distanceMap.get(next.parent);
  }
  return `start > ${finalPath}`;
};

const graph1 = new Map();
graph1.set('start', [
  ['a', 2],
  ['b', 5],
]);
graph1.set('a', [
  ['b', 8],
  ['c', 7],
]);
graph1.set('b', [
  ['c', 2],
  ['d', 4],
]);
graph1.set('c', [['finish', 1]]);
graph1.set('d', [
  ['finish', 3],
  ['c', 6],
]);
graph1.set('finish', []);

const graph2 = new Map();
graph2.set('start', [['a', 10]]);
graph2.set('a', [['b', 20]]);
graph2.set('b', [
  ['c', 1],
  ['finish', 30],
]);
graph2.set('c', [['a', 1]]);
graph2.set('finish', []);

console.log(calculatePath(graph1));
console.log(calculatePath(graph2));
