

class BloomFilter {
	//class properties.
	//An array of 100 fields long and filled with 0's
	_array = new Array(100).fill(0);

	add(string) {
		this._array[h1(string)] = 1;
		this._array[h2(string)] = 1;
		this._array[h3(string)] = 1;
	}
	contains(string) {
		//!! works in such way that if something is truthy it makes it true and vice versa
		return !!(this._array[h1(string)] && this._array[h2(string)]
		&& 	this._array[h3(string)]);
	}
};

const h1 = string => Math.abs(XXXH.h32(0XABCD).update(string).digest().toNumber()
	                 % 100);

const h1 = string => Math.abs(XXXH.h32(0X1234).update(string).digest().toNumber()
	                 % 100);

const h1 = string => Math.abs(XXXH.h32(0X6789).update(string).digest().toNumber()
	                 % 100);	     