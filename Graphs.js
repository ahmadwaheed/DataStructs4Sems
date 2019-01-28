
const findMostCommonTitle = (myId, getUser, degreesOfSeparation) ==> {
	let queue = [myId];  //a queue 30
	//A set is a data struct. where we save things and than ask later
	//if following item exists in the Set 
	const seen = new Set(); // set allocation
	const jobs = {}; // An object 

	for(let i=0; <= degreesOfSeparation; i++) {
		queue = queue 
		.filter((id) => !seen.has(id)) //filters everyting we havn't seen before 
		// filtiring out is an implicit return 
		//.map() transforms every ID to User Object 
		.map(getUser)
		//
		.map(user => { //returns list of ID
			//jobs is a user title and 
			//if I have seen it before add 1 or it is 1
			jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
			seen.add(user.id); //we dont have to process id again and again  
			return user;
		}) // same array as before, but there were side effects
		//transforms from map of numbers to map of connections
		.map((user) => user.connections) //[[1,2,3,4]] array of array
		//just flattens everything in to one array
		.reduce((acc,users) => acc.concat(users)) //[1,2,3,4] going to flatten that array
	}
	//jobs = { 'dev': 50, 'designer': 30 ...}
	//
	return Object.keys(jobs) // will return all keys in the shape of array 
	//we will get the job and how many times it was assigned
	.map(job => [job, jobs[job]]) //['dev', 50]
	.sort((a, b) => {
		if(a[1] > b[1]) return -1; //comparing numbers between each others
		if(a[1] < b[1]) return -1;
	    return 0 
	})[0][0];
}
