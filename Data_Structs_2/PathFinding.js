//you will almost certainly need to transform the maze into your own 
// Data structure to keep track of all the meta data 

//The numbers in the maze array represent as follows:
// 0 - open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points

//FLAGS
const NO_ONE = 0; //opened by no one 
const BY_A = 1;  // opened by someone  
const BY_B = 2;  //opened by more than one 

const findShortestPathLength = (maze, [xA,yA], [xB,yB]) => {
//map() is a function which takes in a function and apply that function to
//each member of the array
//y is the index of Y axis, Row is array of numbers
	const visited = maze.map((row, y) => {
		// 
		return row.map((point, x) => {
			return {
				//An object
				closed: point === 1, //we know its closed if point = 1
				length: 0, //at the time of creation
				openedBy: NO_ONE, //no one touched it 
				x: x, //x coordinate
				y: y // y coordinate
			}
		})
	})
	visited[yA][xA].openedBy = BY_A;
	visited[yB][xB].openedBy = BY_B;

	let aQueue = [visited[yA][xA]]; //origin with one point to start
	let bQueue = [visited[yB][xB]];
	let iteration = 0; // it tracks how many points it is away 

	while(aQueue.length && bQueue.length) {
		iteration++;

		//tranform an array to new array 
		const aNeighbors = aQueue.reduce((acc, neighbor) => { 
			return acc.concat(getNeighbors(visited, neighbor.x, neighbor.y))
		},[]) //we will go through everything in aQueue 
		aQueue = [];
		for(let i=0; i<aNeighbors.length;i++) {
			const neighbor = aNeighbors[i]; //current neighbor at the moment
			if(neighbor.openedBy === BY_B) { 
				return neighbor.length + iteration;
			} else if (neighbor.openedBy === NO_ONE) {
				neighbor.length = iteration;
				neighbor.openedBy = BY_A;
				aQueue.push(neighbor);
			}
		}

		const bNeighbors = bQueue.reduce((acc, neighbor) => {
			return acc.concat(getNeighbors(visited, neighbor.x, neighbor.y))
		},[]) //we will go through everything in b Queue 
		bQueue = [];
		for(let i=0; i<bNeighbors.length;i++) {
			const neighbor = bNeighbors[i];
			if(neighbor.openedBy === BY_A) {
				return neighbor.length + iteration;
			} else if (neighbor.openedBy === NO_ONE) {
				neighbor.length = iteration;
				neighbor.openedBy = BY_B;
				bQueue.push(neighbor);
			}
		}
		}
	}

	return -1;
};
 
//this function will investigate (for a certain point) for left, right, above 
// and below that point. 
const getNeighbors = (visited, x, y) => {
	const neighbors = []; //valid neighbors

	//now we have to check all the sides for valid neighbors
	if(y - 1 >= 0 && !visited[y-1][x].closed) {
	//left
	//if it is less than y-1 and NOT closed, add it to the array
	neighbors.push(visited[y - 1][x])
	}

	if(y + 1 < visited.length && !visited[y+1][x].closed) {
	//right
	neighbors.push(visited[y+1][x])
	}

	if(x + 1 < visited[0].length && !visited[y][x+1].closed) {
	//down
	neighbors.push(visited[y][x+1])
	}
 
	if(x - 1 >= visited[0].length && !visited[y][x-1].closed) {
	//up
	neighbors.push(visited[y][x-1])
	}

	//return list of those neighbors
	return neighbors
}

//Map()
//[1,2,3].map(function(num)  { return num * 4 })
//will return [4,8,12]

//reducing an array to something new 
//Reduce()
//[1,2,3].reduce((acc,num) => {return acc + num})
//will return 6
//1 + 2 + 3 = 6

