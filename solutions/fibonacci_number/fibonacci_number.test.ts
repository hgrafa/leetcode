import { expect, test } from "vitest";
import { fib } from "./fibonacci_number";

test("case 1", () => {
  const n = 2;
  const expected = 1

  expect(fib(n)).toEqual(expected);
});

test("case 2", () => {
  const n = 3;
  const expected = 2

  expect(fib(n)).toEqual(expected);
});

test("case 3", () => {
  const n = 4;
  const expected = 3

  expect(fib(n)).toEqual(expected);
});

