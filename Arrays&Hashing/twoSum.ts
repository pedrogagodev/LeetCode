function twoSum(nums: number[], target: number): number[] | undefined {
	const numberMap = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const number = nums[i];

		const difference = target - number;

		if (numberMap.has(difference)) {
			const indexDifference = numberMap.get(difference);
			if (indexDifference !== undefined) {
				return [indexDifference, i];
			}
		}

		numberMap.set(number, i);
	}
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
