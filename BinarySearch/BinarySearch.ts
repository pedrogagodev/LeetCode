function search(numbers: number[], target: number): number {
	let start = 0;
	let end = numbers.length - 1;

	while (start <= end) {
		const mid = Math.floor((start + end) / 2);

		if (numbers[mid] === target) {
			return mid;
		}
		if (numbers[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
