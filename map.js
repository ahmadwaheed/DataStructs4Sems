
const doubleVal = (num) => { return 2*num};
const doubleEach = input => input.map(doubleVal);
console.log(doubleEach);

const squareVal = num => num * num;
const squareEach = input => input.map(squareVal);
console.log(squareEach);

const doubleAndSquareEach = input => input.map(doubleVal).map(squareVal);

const myMap = (array, fn) => {
	const answer = []; //empty array
	for(let i=0; i<array.length; i++) {
		answer.push(fn(array[i]));
	}
	return answer;
};


var array = [1,2,3,4,5];
var transformed = array.map(function(num) {return num*2});
console.log(transformed);

//var trans = inputt => inputt.map(array * 2);
//console.log(inputt);


