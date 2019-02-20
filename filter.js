// It takes a list of items and pares out some of the items you don't
//need in the list. 

//Even numbers will stay in the list
const filterOutOdds = nums => nums.filter(num => num % 2 === 0);

const filterState = (list, state) => list.filter(person => person.state === state);

const myFilter = (list, fn) => {
	const answer = [];
	for(let i=0;i<list.length;i++) {
		if(fn(list[i])) {
			answer.push(list[i]);
		}
	}
	return answer;
}
