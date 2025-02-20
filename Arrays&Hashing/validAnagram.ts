function isAnagram(s: string, t: string): boolean {
	const sToArray = s.split("");
	const tToArray = t.split("");
	if (sToArray.sort().toString() === tToArray.sort().toString()) {
		return true;
	}
	return false;
}

console.log(isAnagram("car", "rac"));
