function isPalindrome(s: string): boolean {
	const sWithoutAlphaNum = s.replace(/[^a-zA-Z0-9]/g, "");
	const checkIsPalindrome = [];

	for (let i = sWithoutAlphaNum.length - 1; i > -1; i--) {
		checkIsPalindrome.push(sWithoutAlphaNum[i]);
	}

	if (
		sWithoutAlphaNum.toLowerCase() ===
		checkIsPalindrome.toString().toLowerCase().replaceAll(",", "")
	) {
		return true;
	}

	return false;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
