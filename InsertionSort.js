





const insertSort = (nums) => {
	for(let i = 1; i< nums.length; i++) { //goes over the array
		for(let j=0;j < i; j++) { //goes over the inner part of the array (sorted part)
			snapshot(nums);
			if(nums[i] < nums[j]) {
				 let spliced = nums.splice(i,1); // will take out one 
				 nums.splice(j,0,spliced[0]); // insert something into that particular spot
			}
		}
	}
};