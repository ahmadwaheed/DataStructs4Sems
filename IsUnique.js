//Implement an algo. to determine if a string has all unique chars. what if 
//you cannot use additional data structures
function isUnique(str) {
	if(str.length > 128) 
		return false;

	var charSet = " ";

	for(var i=0;i<str.length;i++) {
		//gives the character at the specified index in a string
		var val = str.charAt(i);
		if(charSet[val]) { // Already found this char in string
			return false;
		} 
		charSet[val] = true;
	}
	return true;
}

console.log(isUnique("ahmad"));
