
class Tree {
	constructor() {
		this.root = null;
	}

	add(value) {
			if(!this.root) { // if there is no root node
				this.root = new Node(value); //creates a root node
			} else {
				this.root.add(value); // recursively adds roots to the tree
			}
		}

	toObject() {
		return this.root; //helps virtualization
	}
}

class Node {
	constructor(value, left=null, right=null) {
		this.value = value;  //value to insert or delete
		this.left = left;  //left side
		this.right = right; //right side
		this.height = 1;  // height of the node (at current moment)
	}

	add(value) {
		if(value < this.value) {  // 'value' is current value

		//go left
		if(this.left) { //if left node exists
			this.left.add(value);  // add value to left node
		} else {
			this.left = new Node(value); //OR create new node at that position
		}
		//if(NOT right OR right.height < left.height)
		if(!this.right || this.right.height < this.left.height) {
		//if(NOT right || right.height < left.height)
		//if left side is greater, next step is to increment left.height
			this.height = this.left.height + 1;
		}
	  } else {
	  	if(this.right) { //if right node exists
	  		this.right.add(value); //add value to right node 
	  	} else {
	  		this.right = new Node(value); // create new node 
	  	}

	  	//if(NOT left OR right.height > left.height)
	  	if(!this.left || this.right.height > this.left.height) {
	  		this.height = this.right.height + 1;
	  	}
	  }
	  this.balance();
	}

	balance() {
		//if we have a right child than grab it's height or it is equal to 0
		const rightHeight = (this.right) ? this.right.height : 0;
		const leftHeight = (this.left) ? this.left.height : 0;

		if(leftHeight > rightHeight + 1) {
			//this is single rotation step
			const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
			const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;

			if(leftRightHeight > leftLeftHeight) {
				//this is double rotation step
				this.left.rotateRR(); //perform right rotation on left
			}
			this.rotateLL();
		} else if {
			const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
			const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;

			if(rightLeftHeight > rightRightHeight) {
				this.right.rotateLL();
			}
			this.rotateRR();
		}
	}

	rotateRR() {
		const valueBefore = this.value; //grab the value before
		const leftBefore = this.left; //grab the left before
		this.value = this.right.value; //value is the right sided value
		this.left = this.right; //left is assigned right
		this.right = this.right.right;  
		this.left.right = this.left.left;
		this.left.left = leftBefore;
		this.left.value = valueBefore;
		this.left.updateInNewLocation();
		this.updateInNewLocation();
	}

	rotateLL() {
		const valueBefore = this.value;
		const rightBefore = this.right;
		this.value = this.left.value;
		this.right = this.left;
		this.left = this.left.left;
		this.right.left = this.right.right;
		this.right.right = rightBefore;
		this.right.value = valueBefore;
		this.right.updateInNewLocation();
		this.updateInNewLocation();
	}
	updateInNewLocation() {
		if(!this.right && !this.left) {
			this.height = 1;
		} else if (!this.right || (this.left && this.right.height <
			       this.left.height)) {
			this.height = this.left.height + 1;
		} else { //if(!this.left || this.right.height > this.left.height)
			this.height = this.right.height + 1;
		}
	}
	serialize() {
		const ans = { value: this.value };
		ans.left = this.left === null ? null : this.left.serialize();
		ans.right = this.right === null ? null : this.right.serialize();
		ans.height = this.height;
		return ans;
	}
}

