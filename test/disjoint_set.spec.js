import { buildDisjointSet, isConnected } from "../src/disjoint_set";

describe("validate disjoint set creation and isConnected method", () => {
  it("should properly create a disjoint set given an array of vertexes and edges", () => {
    const vertexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const edges = [
      [0, 1],
      [0, 2],
      [1, 3],
      [4, 8],
      [5, 6],
      [5, 7],
    ];

    const disjointSet = buildDisjointSet(vertexes, edges);

    const edgesToCheck = [
      [0, 3],
      [1, 2],
      [2, 5],
      [7, 8],
    ];

    for (const edge of edgesToCheck) {
      console.log(isConnected(edge[0], edge[1], disjointSet));
    }
  });
});
