class HashTableSet {
	constructor() {
		this.table = new Array(255);
	}

	add(input) {
		//to this table hash whatever our input is and put that wherever 
		//it needs to go
		this.table[this.hash(input, 255)] = input;
	}

	check(input) {
		//!! is converting it to TRUE or FALSE
		return !!this.table[this.hash(input, 255)];
	}

	hash(input, max) {
		let num = 0;
		for(let i=0; i<input.length; i++) {
			num +=input.charCodeAt(i) * i;
		}
		return num % max;
	}
}