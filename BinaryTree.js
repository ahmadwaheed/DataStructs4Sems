
class Tree {
	constructor() {
		this.root = null;  //creating root
	}
	//visualization helper
	toObject() {
		return this.root; //returning root 
	}

	add(value) {
		if(this.root === null) { //see if we have root 
			// no head, create new head 
			this.root = new Node(value);  // if not, creating new node
			return;
		}

		let current = this.root; //currently looking at this node 
		while(true) { //we want that loop to run until it breaks out of it
			if(current.value > value) { //if given value is greater than 
				
				//go left
				if(current.left) { // if we have a left child
					current = current.left; //move pointer to left 
				} else {
					//if we dont have left node, we will create one 
					current.left = new Node(value);
					return;
				}
			} else {
				
				// go right
				if(current.right) {
					current = current.right;
				} else {
					current.right = new Node(value);
					return;  
				}
			}

		}
	}
}

class Node {
	constructor(value, left=null,right=null) {
		this.value = value;
		this.left = left;
		this.right = right; 
	}
}