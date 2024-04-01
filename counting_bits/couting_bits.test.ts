import { expect, test } from "vitest";
import { countBits } from "./couting_bits";

test("solution easy cases", () => {
  expect(countBits(0)).toEqual([0]);
  expect(countBits(1)).toEqual([0, 1]);
});

test("solution medium cases", () => {
  expect(countBits(2)).toEqual([0, 1, 1]);
  expect(countBits(3)).toEqual([0, 1, 1, 2]);
  expect(countBits(4)).toEqual([0, 1, 1, 2, 1]);
  expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});

test("solution hard cases", () => {
  const expectedResult11 = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3];
  const expectedResult16 = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1];

  expect(countBits(11)).toEqual(expectedResult11);
  expect(countBits(16)).toEqual(expectedResult16);
});
