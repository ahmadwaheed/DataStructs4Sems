//Reduce is really useful when you have a list of values that you want to combine
//in some meaningful way down to one value

var list = ['a','b','c'];

list.reduce(function(accumulator, letter) {
	return accumulator + letter.toUpperCase();
}, ''); 
//returns ABC since '' starts as the seed
console.log(list);

list.reduce(function(accumulator, letter) {
	return accumulator + letter.toUpperCase();
});
console.log(list);


const addTogether = list => {
	return list.reduce((acc, num) => acc+num,0);
};

const concatenateStringsWithSpaces = list => {
	return list.reduce((acc, string) => acc + string + " ", "");
};

const squaresAndSubtracts = list => {
	return list.map(num => num*num).reduce((accumulator, num) => accumulator - num);
};

const myReduce = (list, fn, seed) => {
	let answer = seed;
	for(let i=0; i<list.length; i++) {
		answer = fn(answer, list[i]);
	}
	return answer;
};











