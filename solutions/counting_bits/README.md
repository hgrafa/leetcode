# Counting Bits

## tips

- Find a pattern
- Bit manipulation
  - check if a number is a power of two
  - check numbers of 1's in binary form

## problems founded

> the NOT(~) bit operator isn't reliable

- js/ts trait `4` as `(0100)_2` because needs a byte to store the signal, so when we calculate `~4` the result will be `(1011)_2`, expanding the polinomial form the result is `-5`.

## study cases

```ts
// 1 = (1) = 1

// 2 = (10) = 1
// 3 = (11) = 2

// 4 = (100) = 1
// 5 = (101) = 2
// 6 = (110) = 2
// 7 = (111) = 3

// 8 = (1000) = 1
// 9 = (1001) = 2
// 10 = (1010) = 2
// 11 = (1011) = 3
// 12 = (1100) = 2
// 13 = (1101) = 3
// 14 = (1110) = 3
// 15 = (1111) = 4

// 16 = (10000) = 1
```
