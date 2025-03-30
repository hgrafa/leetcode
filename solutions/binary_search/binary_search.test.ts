import { expect, test } from "vitest";
import { search } from "./binary_search";

test("case 1", () => {
  const nums = [-1,0,3,5,9,12]
  const target = 9
  const expected = 4

  expect(search(nums, target)).toEqual(expected);
});

test("case 2", () => {
  const nums = [-1,0,3,5,9,12]
  const target = 2
  const expected = -1

  expect(search(nums, target)).toEqual(expected);
});
