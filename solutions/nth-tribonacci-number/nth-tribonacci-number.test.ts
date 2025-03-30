import { expect, test } from "vitest";
import { tribonacci } from "./nth-tribonacci-number";


test("case 1", () => {
  const input = 4;
  const expected = 4;


  expect(tribonacci(input)).toEqual(expected);
});

test("case 2", () => {
  const input = 25;
  const expected = 1389537;


  expect(tribonacci(input)).toEqual(expected);
});
