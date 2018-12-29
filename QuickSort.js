// you hsve given two arrays and you have to find median of two arrays

//Naive 
// to concatenate and find median of it 

//2ality.com // Best website for Javascript

const quickSort = (nums) => {
	 if(nums.length <= 1) return nums;

	 const pivot = nums[nums.length - 1];  //last member of the array 
	 let left = [];  // empty left side array
	 let right = []; //empty right side array

	 for(let i=0;i<nums.length;i++) {
	 	if(nums[i] < pivot) {
	 		left.push(nums[i]); // pushing member in left array if it is smaller
	 	} else {
	 		right.push(nums[i]);
	 	}
	 }
	 return[...quickSort(left), pivot, ...quickSort(right)];
	 //return quickSort(left).concat(pivot, quickSort(right));
	 //return [].concat();
} 