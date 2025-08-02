import * as assert from "assert";
import { selectionSort } from "sorting/selection_sort";

describe("selection sort tests", () => {
  it("should sort without duplicated elements", () => {
    const arr = [1,5,4,3,2,6,8,7];
    const res = selectionSort(arr);

    const expectedResult = [1,2,3,4,5,6,7,8]
    assert.equal(String(res), String(expectedResult));

  });
  
});