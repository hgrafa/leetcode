import { expect, test } from "vitest";
import { isSubsequence } from './is_subsequence'


test("case 1", () => { 
  const substring = "abc"
  const text = "ahbgdc"
  const expected = true;
  expect(isSubsequence(substring, text)).toEqual(expected); 
});

test("case 2", () => { 
  const substring = "axc"
  const text = "ahbgdc"
  const expected = false;
  expect(isSubsequence(substring, text)).toEqual(expected); 
});
