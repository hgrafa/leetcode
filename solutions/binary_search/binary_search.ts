function search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      console.log(middle)

      if (nums[middle] == target) return middle;
      else if (nums[middle] > target) end = middle -1;
      else start = middle + 1;
      
    }

    return -1;
};

export { search }