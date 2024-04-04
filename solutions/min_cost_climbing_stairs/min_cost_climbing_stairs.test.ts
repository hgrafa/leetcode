import { expect, test } from "vitest";
import { minCostClimbingStairs } from "./min_cost_climbing_stairs";

test("easy cases", () => {
  const costs = [10, 15, 20];

  expect(minCostClimbingStairs(costs)).toEqual(15);
});

test("hard cases", () => {
  const costs = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

  expect(minCostClimbingStairs(costs)).toEqual(6);
});
