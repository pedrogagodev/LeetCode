function twoSum(nums: number[], target: number): number[] | boolean {
	for (let i = 0; i < nums.length; i++) {
		for (let j = nums.length - 1; j > -1; j--) {
			if (nums[i] + nums[j] === target && i !== j) {
				const result = [i, j];
				return result;
			}
		}
	}
	return false;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
