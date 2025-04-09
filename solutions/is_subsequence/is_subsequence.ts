function isSubsequence(s: string, t: string): boolean {

  let i = 0, j = 0

  while(i < s.length && j < t.length) {
    console.log(s.charAt(i), t.charAt(j))

    if(s.charAt(i) === t.charAt(j)) {
      i++
    }

    j++
  }

  return i == s.length
};

export { isSubsequence }
