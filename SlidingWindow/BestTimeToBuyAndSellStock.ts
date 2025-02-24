function maxProfit(prices: number[]): number {
	let maxProfit = 0;
	let buyPriceIndex = 0;
	let sellPriceIndex = 1;

	while (sellPriceIndex < prices.length) {
		if (prices[sellPriceIndex] > prices[buyPriceIndex]) {
			maxProfit = Math.max(
				maxProfit,
				prices[sellPriceIndex] - prices[buyPriceIndex],
			);
		} else {
			buyPriceIndex = sellPriceIndex;
		}
		sellPriceIndex++;
	}
	return maxProfit;
}

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
