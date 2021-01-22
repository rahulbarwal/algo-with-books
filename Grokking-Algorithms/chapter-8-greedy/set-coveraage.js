/**
 *
 * @param {Set} setA
 * @param {Set} setB
 */
setIntersection = (setA, setB) => {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
};
/**
 *
 * @param {Set} setA
 * @param {Set} setB
 */
setDifference = (setA, setB) => {
  let _diff = new Set();
  for (let elem of setA) {
    if (!setB.has(elem)) {
      _diff.add(elem);
    }
  }
  return _diff;
};

/**
 *
 * @param {Map<string, Set>} sets
 * @param {Set} maxElements
 */
const getCoverageSets = (sets, maxElements) => {
  const finalSetArray = [];
  let i = 0;
  while (maxElements.size > 0) {
    let localMax = null;
    let localBest = null;
    for (const [title, set] of sets.entries()) {
      const localCovered = setIntersection(maxElements, set);
      if (!localBest || localBest.size < localCovered.size) {
        localBest = localCovered;
        localMax = title;
      }
    }
    finalSetArray.push(localMax);
    maxElements = setDifference(maxElements, localBest);
  }
  return finalSetArray;
};

const sets = new Map();
sets.set('a', new Set([1, 2, 3]));
sets.set('b', new Set([4, 5, 3]));
sets.set('c', new Set([5, 6]));
sets.set('d', new Set([1, 2, 6]));

const wanted = new Set([1, 2, 3, 4, 5]);

const coverage = getCoverageSets(sets, wanted);
console.log(coverage);
