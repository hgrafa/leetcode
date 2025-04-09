import { expect, test } from "vitest";
import { isPalindrome } from './valid_palindrome'


test("case 1", () => { 
  const text = "A man, a plan, a canal: Panama"
  const expected = true;
  expect(isPalindrome(text)).toEqual(expected); 
});

test("case 2", () => { 
  const text = "race a car"
  const expected = false;
  expect(isPalindrome(text)).toEqual(expected); 
});

test("case 3", () => { 
  const text = " "
  const expected = true;
  expect(isPalindrome(text)).toEqual(expected); 
});

test("case 4", () => { 
  const text = "0P"
  const expected = false;
  expect(isPalindrome(text)).toEqual(expected); 
});
