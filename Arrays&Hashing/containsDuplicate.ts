function containsDuplicate(nums: number[]): boolean {
	const map = new Map<number, number>();

	for (const num of nums) {
		if (map.has(num)) {
			return true;
		}
		map.set(num, 1);
	}

	return false;
}
