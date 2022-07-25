console.log('Merge Sort');

class merge_sort {

	constructor(list) {
		this.list = list;
	}

	sort(unordered) {
		if (unordered == null) {
			unordered = this.list;
			var root = true;
		}
		if (unordered.length > 1) {
				/*
				* Rising Edge
				*
				* Splits list in half and sends them away to be organised recursively
				*
				*/
			let mid = Math.ceil(unordered.length / 2);
			
				// Splits list in two
			let first = unordered.slice(0, mid);
			let last = unordered.slice(mid, unordered.length);
	
				// Sorts each half of the list
			first = this.sort(first);
			last = this.sort(last);
	
				/*
		       		* Falling Edge
		       		*
		       		* Sorts the spliced arrays on the way back up the recursive pile
		       		*
		       		*/
			var ordered = [];
			for (let i = 0; i < unordered.length; i++) {	// Runs through all the items in the list to sort
	
				if (last[0] == null) {

					for (let j = 0; j < first.length; j++) {
						ordered.push(first[j]);
					}

					first = [];
				} else if (first[0] == null) {

					for (let j = 0; j < last.length; j++) {
						ordered.push(last[j]);
					}

					last = [];
				} else if (first[0] < last[0]) {	// Identifies smallest item
	
					ordered.push(first[0]);
	
					first.shift();
				} else {
	
					ordered.push(last[0]);
	
					last.shift();
				}
			};
		} else {	
				/*
				* Base Case
				*
				* Doesn't need to do much as we don't have enough items to sort
				*/
			return unordered;
		}
		if (root == true) {
			this.list = ordered;
		}
		return ordered;
	}

	print() {

		let output = '';
	
		this.list.forEach(function(item, i) {
	
			output += item + ' ';
		});
	
		console.log(output);
	}
}
