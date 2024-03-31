import { expect, test } from "vitest";
import { isPowerOfTwo, countBits } from "./couting_bits";

test("is power of two", () => {
  expect(isPowerOfTwo(0)).toEqual(false);
  expect(isPowerOfTwo(2)).toEqual(true);
  expect(isPowerOfTwo(4)).toEqual(true);
  expect(isPowerOfTwo(5)).toEqual(false);
});

test("solution easy cases", () => {
  expect(countBits(0)).toEqual([0]);
  expect(countBits(1)).toEqual([0, 1]);
});

test("solution hard cases", () => {
  expect(countBits(2)).toEqual([0, 1, 1]);
  expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});

// 1 = 1 = 1

// 2 = 10 = 1
// 3 = 11 = 2

// 4 = 100 = 1
// 5 = 101 = 2
// 6 = 110 = 2
// 7 = 111 = 3

// 8 = 1000 = 1
// 9 = 1001 = 2
// 10 = 1010 = 2
// 11 = 1011 = 3
// 12 = 1100 = 2
// 13 = 1101 = 3
// 14 = 1110 = 3
// 15 = 1111 = 4

// 16 = 10000 = 1
