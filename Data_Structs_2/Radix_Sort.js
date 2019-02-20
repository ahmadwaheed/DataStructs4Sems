
function getDigit(number, place, longestNumber) {
	const string = number.toString();
	const size = string.length;
	const mod = longestNumber - size; // last index of the array

	return string[place - mod] || 0;
};

function findLongestNumber(array) {
	let longest = 0;

	for(let i=0;i<array.length;i++) {
		const currentLength = array[i].toString.length;

		//Ternary expression
		longest = currentLength > longest ? currentLength : longest;
	}
	return longest;
}

function radixSort (array) {
snapshot(array);
const longestNumber = findLongestNumber(array);

//It is an array of 10 arrays
const buckets = Array.from({length: 10}, () =>[]);

for(let i=longestNumber-1;i>=0;i--) {
	while(array.length) {
		const current = array.shift();
		buckets[getDigit(current,i,longestNumber)].push(current);
	}
	for(let j=0;j<10;j++) {
		while(buckets[j].length) {
			array.push(buckets[j].shift())
		}
	}
	snapshot(array);
}
return array;
};



