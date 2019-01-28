class BloomFilter {
	//class property, fills 100 with 0's
	_array = new Array(100).fill(0)

	add(string) {
		this._array[h1(string)] = 1;
		this._array[h2(string)] = 1;
		this._array[h3(string)] = 1;
	}
	contains(string) {
		//!! will make truthy to truth and falsey to false
		return !!(this._array[h1(string)] && this._array[h2(string)]
		&& this._array[h3(string)])
	}
};

//A library called xxhashjs is being loaded (as XXH) and we're using three 
//different instances of that as your hashing functions
const h1 = string => Math.abs(XXH.h32(0xABCD).update(string).digest().toNumber() % 100);
const h2 = string => Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = string => Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);