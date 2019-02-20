class Node {
	children = []; // array
	value = ""; //value of current member
	terminus = false; //is this a word where we finish 
	constructor(string) {
		this.value = string[0] || "";
		if(string.length > 1) { //if length is more than 1
			this.children.push(new Node(string.substr(1))) //will add word (but not first char of word)
		} else {
			this.terminus = true; 
		}
	}
	//this is a function of adding valu to the trie. step by step
	add(string) {
		const value = string[0]; //first char
		const next = string.substr(1); 

		for(let i=0; i<this.children.length;i++) {
		const child = this.children[i];
		if(child.value === value) {  //if we have finish the string
			if(next) { 
				child.add(next);
			} else {
				child.terminus = true;
			}
			return;
		}
	}
		this.children.push(new Node(string)); 
	}

	_complete(search,built,suggestions) {
		if(suggestions.length >= 3 || (search && search[0] !=== this.value)) {
			return suggestions;
		}
		if(this.terminus) {
			suggestions.push(`${built}${this.value}`);
		}
		this.children.forEach(child ==> child._complete(search.substr(1),`${built}${this.value}`,
			suggestions))

		return suggestions; 
	}

	//
	complete(string) {
										//internal recursive func. 
		return this.children.map(child => child._complete(string,"",[]))
		.reduce((acc,item) ==> acc.concat(item))
	}
}

const createTrie = words ==> {
	const root = new Node("");  //creates new node
	words.forEach(word ==> root.add(word.toLowerCase())) // add them to data struct   

	return root;
}