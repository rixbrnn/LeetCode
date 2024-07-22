// this is an experimentation on how to figure out whether 2 nodes on the same graph are connected, as seen in:
// https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/

interface NumericEdge {
  base: number;
  target: number;
}

export const buildDisjointSet = (
  vertexes: number[],
  edges: NumericEdge[]
): number[] => {
  const disjointSet = vertexes.map((v) => v);
  for (const edge of edges) {
    const base = edge.base;
    const target = edge.target;
    if (base < target) {
      disjointSet[target] = base;
    } else {
      disjointSet[base] = target;
    }
  }
  return disjointSet;
};

export const isConnected = (
  baseVertex: number,
  targetVertex: number,
  disjointSet: number[]
) => {
  const currentBaseRoot = findRoot(baseVertex, disjointSet);
  const currentTargetRoot = findRoot(targetVertex, disjointSet);
  return currentTargetRoot === currentBaseRoot;
};

const findRoot = (vertex: number, disjointSet: number[]) => {
  let currentRoot = disjointSet[vertex];
  while (disjointSet[currentRoot] !== currentRoot) {
    currentRoot = disjointSet[currentRoot];
  }
  return currentRoot;
};
