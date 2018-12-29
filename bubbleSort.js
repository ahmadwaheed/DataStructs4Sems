const bubbleSort = (nums) => {
	let swapped = false;  //keep track of something to swap or not 

	do {
		for(let i=0; i < nums.length; i++) { // to make it progressive
			snapshot(nums);

			if(nums[i] > nums[i+1]) { // checking which one is bigger
				var temp = nums[i]; //setting number to temp
				nums[i] = nums[i+1]; //swapping number with next one
				nums[i+1] = temp; //setting new number to temp
				swapped = true; //setting swap true
			}
		}
	} while (swapped); //while it is being swapped 
	snapshot(nums);
}

describe('bubble sort', function() {
	it('should sort correctly', () => {
		var nums = [10,5,3,8,2,6,4,7,9,1];
		bubbleSort(nums);
	})
});