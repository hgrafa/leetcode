import { test, expect } from "vitest";
import { divisorGame } from "./divisor_game";

test("easy cases", () => {
  expect(divisorGame(2)).toEqual(true);
  expect(divisorGame(3)).toEqual(false);
});
