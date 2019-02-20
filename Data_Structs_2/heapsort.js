//Process of heapsort
/*
- Make the array a maz heap
- loop over the array, dequeueng the root node and swapping that 
  with last item in the array.
- after dequeueing each item, run heapify again once to find the next root node
- next loop you'll dequeue the root node and swap it with the second-to-last item 
  in the array and run heapify again.
- once you've run out of items to dequeue, you have a sorted array! let's
  see what that looks like
*/

const heapSort = (array) => {
	snapshot(array); //for visualization
	array = createMaxHeap(array);
	let temp;

	for(let i=array.length - 1; i > 0; i--) {
		temp = array[0];
		array[0] = array[i];
		array[i] = temp;
		heapSize--;
		heapify(array,0,heapSize);
	}

	snapshot(array);
	return array;
};

const createMaxHeap = (array) => {
	for(let i=Math.floor(array.length/2); i>=0; i--) {
		heapify(array,i,array.length);
		//array:Array, i: currently where we are, array.length: we have to make heap smaller and smaller
	}
	return array;
};

const heapify = (array, index, heapSize) => {
	const left = 2 * index + 1;
	const right = 2 * index + 2;
	let largestValueIndex = index;

	if(heapSize > left && array[largestValueIndex] < array[left]) {
		largestValueIndex = left;
	}

	if(heapSize > right && array[largestValueIndex] < array[right]) {
		largestValueIndex = right;
	}

	if(largestValueIndex !=== index) {
		const temp = array[index];
		array[index] = array[largestValueIndex];
		array[largestValueIndex] = temp; 
		heapify(array, largestValueIndex, heapSize); 
	}
	snapshot(array);
};





