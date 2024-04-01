function countBits(n: number): number[] {
  let array: number[] = new Array(n + 1);
  array[0] = 0;

  if (n == 0) return array;

  array[1] = 1;
  let checkpoint = 1;

  for (let pos = 2; pos <= n; pos++) {
    if (pos === checkpoint * 4) checkpoint *= 2;

    const size = checkpoint * 2;
    const relativePos = pos % size;
    const increment = relativePos >= size / 2 ? 1 : 0;

    array[pos] = array[checkpoint + relativePos] + increment;
  }

  return array;
}

export { countBits };
