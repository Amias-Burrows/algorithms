console.log('Bubble Sort');


class bubble_sort {


	constructor(list) {
		this.list = list;
	}

	/*
	* Function for sorting the list.
	* Only finishes when nothing is swapped during a run through
	*/

	sort() {
		let sorted = false;
	
		while (sorted == false) {
	
			sorted = true;
	
			for (let i = 0; i < this.list.length - 1; i++) {
	
				if (this.list[i] > this.list[i+1]) {
	
					sorted = false;
					console.log(this.list[i] + ' swapped with ' + this.list[i+1]);
	
					let temp = this.list[i];
					this.list[i] = this.list[i+1];
					this.list[i+1] = temp;
				} else {
					
					console.log(this.list[i] + ' not swapped with ' + this.list[i+1]);
				}
			}
	
			console.log('sorted = ' + sorted);
		}
	}
	
	/*
	* Sorts out the list more efficiently
	* removes one item from the end of the operations because that one is definitely sorted.
	* Finishes when either the length of the list reaches 0 or nothing is changed during a run through
	*/
	
	efficient_sort() {
		let sorted = false;
	
		let length = this.list.length - 1;
	
		while (length == 0 || sorted == false ) {
			
			sorted = true;
	
			for (let i = 0; i < length; i++) {
	
				if (this.list[i] > this.list[i+1]) {
	
					sorted = false;
					console.log(this.list[i] + ' swapped with ' + this.list[i+1]);
	
					let temp = this.list[i];
					this.list[i] = this.list[i+1];
					this.list[i+1] = temp;
				} else {
	
					console.log(this.list[i] + ' not swapped with ' + this.list[i+1]);
				}
			}
	
			console.log(length-- + ' unsorted items');
			console.log('sorted = ' + sorted);
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

