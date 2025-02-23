function isValid(s: string): boolean {
	const bracketsMap: { [x: string]: string } = {
		"}": "{",
		"]": "[",
		")": "(",
	};

	const openBrackets = [];

	for (let i = 0; i < s.length; i++) {
		const currentBracket = s[i];

		if (["(", "[", "{"].includes(currentBracket)) {
			openBrackets.push(currentBracket);
		} else if (openBrackets.pop() !== bracketsMap[currentBracket]) {
			return false;
		}
	}
	return !openBrackets.length;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
