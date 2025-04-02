var majorityElement = function(nums: number[]) {
  let map: any = {}
  const target = nums.length / 2.0;

  for(let i = 0; i < nums.length; i++) {

    if (map[nums[i]]) {
      map[nums[i]]++
    } else {
      map[nums[i]] = 1;
    }

    if(map[nums[i]] > target) {
      return nums[i]
    }
  }
};

export { majorityElement }