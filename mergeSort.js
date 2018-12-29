 

 const mergeSort = (nums) => {
 	if(nums.length < 2) { //base case
 		return nums;
 	}

 	const length = nums.length;  //getting length
 	const middle = Math.floor(length/2); // getting middle of array

 	const left = nums.slice(0,middle);  // left side of the array
 	const right = nums.slice(middle, length); // rigth side of the array
 	const sortedLeft = mergeSort(left); //this is recursive on left slice
 	const sortedRight = mergeSort(right); //this is recursive on right slice 

 	return stitch(sortedLeft, sortedRight);
 };

 const stitch = (partOne,partTwo) => {
 	const results = [];

 	while(partOne.length && partTwo.length) { //as long as somethng is left behind
 		if(partOne[0] <= partTwo[0]) {
 			results.push(partOne.shift()); //shift() pops it to the front of the array -
 		} else {
 			results.push(partTwo.shift());
 		}
 	}

 	// we can also do 
 	//return [...results, ...partOne, ...partTwo];
 	
 	while(partOne.length) {
 		results.push(partOne.shift());
 	}
 	while(partTwo.length) {
 		results.push(partTwo.shift());
 	}
 };

 return results;