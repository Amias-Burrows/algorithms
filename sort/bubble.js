console.log('Bubble Sort');
let bubble = [7, 2, 10, 9, 8, 1, 3, 5, 4, 6];	// Initialises the unordered list in an array

/*
 * Function for sorting the list.
 * Only finishes when nothing is swapped during a run through
 */

function sort() {
	let sorted = false;

	while (sorted == false) {

		sorted = true;

		for (i = 0; i < bubble.length - 1; i++) {

			if (bubble[i] > bubble[i+1]) {

				sorted = false;
				console.log(bubble[i] + ' swapped with ' + bubble[i+1]);

				let temp = bubble[i];
				bubble[i] = bubble[i+1];
				bubble[i+1] = temp;
			} else {
				
				console.log(bubble[i] + ' not swapped with ' + bubble[i+1]);
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

function efficient_sort() {
	let sorted = false;

	let length = bubble.length - 1;

	while (length == 0 || sorted == false ) {
		
		sorted = true;

		for (i = 0; i < length; i++) {

			if (bubble[i] > bubble[i+1]) {

				sorted = false;
				console.log(bubble[i] + ' swapped with ' + bubble[i+1]);

				let temp = bubble[i];
				bubble[i] = bubble[i+1];
				bubble[i+1] = temp;
			} else {

				console.log(bubble[i] + ' not swapped with ' + bubble[i+1]);
			}
		}

		console.log(length--);
		console.log('sorted = ' + sorted);
	}
}

// Prints the list in it's current state

function print() {

	let output = '';

	bubble.forEach(function(item, i) {

		output += item + ' ';
	});

	console.log(output);
}
