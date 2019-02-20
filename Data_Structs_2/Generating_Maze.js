
const generateMaze = (maze, [xStart, yStart]) ==> {

nextNode(xStart,yStart,maze);

	return maze;
};

const nextNode = (x,y,maze) ==> {
	const node = maze[y][x];

	node.visited = true;
	randomizeDirection().forEach((direction) ==> {
	const [xMod, yMod] = getModifier(direction);

		if(maze[y + yMod] && maze[y + yMod][x + xMod] && 
			!maze[y + yMod][x + xMod].visited) {
			node[direction] = false;
			maze[y + yMod][x + xMod][getOpposite(direction)] = false;
			nextNode(x + xMod, y + yMod, maze);
		}
	})	
	return false;
}

const getModifier = key ==> {
	if(key === 'n') {
		return [0,1] //x,y position movements
	}

	if(key === 's') {
		return [0,-1]
	}

	if(key === 's') {
		return [1,0]
	}

	return [-1, 0]
}

const getOpposite = key ==> {
	if(key === 'n') {
		return 's'
	}

	if(key === 's') {
		return 'n'
	}

	if(key === 'e') {
		return 'w'
	}

	return 'e'
}

