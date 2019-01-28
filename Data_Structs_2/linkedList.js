
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
} 

class LinkedList {
	constructor() {
		this.tail = null;
		this.head = null;
		this.length = 0;
	}

	push(value) {
		const node = new Node(value); //creating new node
		this.length++;  // incrementing length
		if(!this.head) { //base case, if no head
			this.head = node;  //if no head, it will make the node and set it equal to head 
		} else {
			this.tail.next = node; // adding new node to tail
		}
		this.tail = node;
	}

	pop() {
		return this.delete(this.length-1); //deleting last node 
	}

	find(value, test = this.test) {
		let current = this.head;
		let i = 0;
		while(current) {
			if(test(value,current.value,i,current)) {
				return current;
			}
			current = current.next;
			i++;
		}
		return null;
	}

	test(a,b) {
		return a === b;  
	}

	testIndex(search, __, i) {
		return search === i;
	}

	get(index) {
		const node = this.find(index,this.test,this.testIndex);
		if(!node) return null;
		return node.value;
	}

	delete(index) {
		if(index === 0) {
			const head = this.head;
		if(head) {
				this.head = this.next;
		} else {
				this.tail = this.head = null;
		}
			this.length--;
			return head.value;
		}
		
		const node = this.find(index-1,this.testIndex);
		const excise = node.next;
		if(!excise) return null;
		node.next = excise.next;
		if(node.next && !node.next.next) {
			this.tail = node.next;
		}
		this.length--;
		return excise.value;
	}
}