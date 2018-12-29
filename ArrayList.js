class ArrayList {
	constructor() {
		this.length = 0; //variable
		this.data = {}; // creating object 
	}

	push(value) {
		this.data[this.length] = value; // adds value to the end of the array
	  //this.object[xxx] = value
		this.length++; // incrementts the length of th array 
	}

	pop() {
		const ans = this.data[this.length - 1]; //pointing to last member of the array
		delete this.data[this.length - 1]; //deleting pointed member
		this.length--; // decrements the array 
		return ans; // returning the pointed member

		//This will work as well
		//return this.delete(this.length - 1);
	}

	get(index) {
		//this.data = index;
		return this.data[index];
	}

	delete(index) {
		const ans = this.data[index];
		this.collapseTo(index);
		return ans;
	}

	collapseTo(index) {
		for(let i=index; i<this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		
		delete this.data[this.length - 1];
		this.length--;
	}
}