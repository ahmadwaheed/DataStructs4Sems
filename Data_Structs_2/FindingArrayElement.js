//for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for 

function linearSearch(id, array) {
	for(let i=0;i < array.length;i++) {
		if(id === array[i].id) {  // num === arr[i].num
			return array[i];
		}
	}
}

function binarySearch(id, array) {
	let min = 0;
	let max = array.length - 1;
	let index;
	let element;

	while(min <= max) {
		index = Math.floor((min + max) / 2); //middle element
		element = array[index]; //element we looking at the moment
		if(element.id < id) {
			min = index + 1;
		} else if(element.id > id) {
			max = index - 1;
		} else {
			return element;
		}
	}
}