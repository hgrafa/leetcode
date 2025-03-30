function tribonacci(n: number): number {
  if(n == 0) return 0
  if(n == 1) return 1
  if(n == 2) return 1
 
  let a = 0
  let b = 1
  let c = 1
  let result = 0

  for(let i = 3; i <= n; i++) {
    result = a + b + c
    a = b
    b = c
    c = result
  }

  return result
};

export { tribonacci }