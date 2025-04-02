import { expect, test } from "vitest";
import { majorityElement } from "./majority_element";

test("case 1", () => {
  const nums = [3,2,3]
  const expected = 3

  expect(majorityElement(nums)).toEqual(expected);
});

test("case 2", () => {
  const nums = [2,2,1,1,1,2,2]
  const expected = 2

  expect(majorityElement(nums)).toEqual(expected);
});
