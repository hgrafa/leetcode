function isPowerOfTwo(n: number): boolean {
  return n !== 0 && !(n & ~(n - 1));
}

function countBits(n: number): number[] {
  let array = new Array(n + 1);
  array[0] = 0;

  if (n == 0) return array;

  array[1] = 1;

  let lastPowerOfTwo;

  for (let pos = 2; pos <= n; pos++) {
    if (isPowerOfTwo(pos)) {
      lastPowerOfTwo = pos / 2;
    } else if (pos) {
    }
  }

  return array;
}

export { isPowerOfTwo, countBits };
