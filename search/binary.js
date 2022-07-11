console.log('Binary Search');


class binary_search {
	/*
	 * Constructs the binary search object with the hardcoded list provided at the bottom of the file
	 */

	constructor(list) {
		this.list = list;
	}


	search(value, btm, end) {
		let pos = Math.floor(((end - btm) / 2) + btm);
		let mdl = this.list[pos];
	
		if (value > mdl) {
			console.log('Higher than ' + mdl);
			binary.search(value, pos, end);
		} else if (value == mdl) {
			console.log('Value ' + mdl + ' found @ position ' + pos + ' in the list');
			return mdl + ' @ ' + pos;
		} else if (value < mdl){
			console.log('Lower than ' + mdl);
			binary.search(value, btm, pos);
		} else {
			return 'Value {' + value + '} not found';
		}
	}
	
	// Prints the list in it's current state
	
	print() {
	
		let output = '';
	
		this.list.forEach(function(item, i) {
	
			output += item + ' ';
		});
	
		console.log(output);
	}
}

let binary = new binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);	// Initialises the binary search algorithm
