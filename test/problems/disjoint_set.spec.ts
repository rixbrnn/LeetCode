import { buildDisjointSet, isConnected } from "../src/disjoint_set";
import * as assert from "assert";

describe("validate disjoint set creation and isConnected method", () => {
  it("should properly create a disjoint set given an array of vertexes and edges", () => {
    const vertexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const edges = [
      { base: 0, target: 1 },
      { base: 0, target: 2 },
      { base: 1, target: 3 },
      { base: 4, target: 8 },
      { base: 5, target: 6 },
      { base: 5, target: 7 },
    ];

    const disjointSet = buildDisjointSet(vertexes, edges);

    const edgesToCheck = [
      { base: 0, target: 3, shouldExist: true },
      { base: 1, target: 2, shouldExist: true },
      { base: 2, target: 5, shouldExist: false },
      { base: 7, target: 8, shouldExist: false },
    ];

    for (const edge of edgesToCheck) {
      const result = isConnected(edge.base, edge.target, disjointSet);
      assert.equal(edge.shouldExist, result);
    }
  });
});
