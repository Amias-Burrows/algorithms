console.log('Reversing Singly List');

	/*
	 * Object class for a node.
	 *
	 * Constructor initialises the content and pointer to the next item in the list
	 */
class node {

	constructor(content, next) {

		this.content = content;
		this.next = next;

	}
	
		// Changes the pointer to point to 'next' variable passed from the parent function

	edit_next(next) {
		
		this.next = next;

	}

		// Used recursively to swap all the pointers to point at their parent nodes

	reverse(previous) {

		if (this.next == null) {	// Base Case

			this.next = previous;

		} else {

			const next_item = this.next;
			this.next = previous;
			next_item.reverse(this);	// Recursive Line

		}
	}

		// If item pointing at 'next' is needing identified this recursively searches until it finds the element which points to our item

	find_previous(next) {

		if (this.next == null) {	// Base Case. Returns false if not found

			return false;

		} else if (this.next == next) {	//Identifies the correct node

			return this;

		} else {	// Recursive part

			return this.next.find_previous(next);

		}
	}

		/*
		 * Identifies the current element if only the content is provided
		 *
		 * Used mainly on 'linked_list.add' to make sure the user input doesn't break the program
		 */

	find_current(content) {

		if (this.content == content) {	// Identifies the correct node

			return this;

		} else if (this.next != null) {	// Recursive part

			return this.next.find_current(content);

		} else {	// Base Case.  Returns false if not found

			return false;

		}
	}

		// Lists each element in order with '->' between elements and '||' at the end of the list
	
	list() {

		if (this.next == null) {	// Base Case.  Outputs itself and the final pipes

			return this.content + ' ||';

		} else {	// Outputs itself and calls the child node

			return this.content + ' -> ' + this.next.list();

		}
	}
}

	/*
	 * Object class for the entire linked list.
	 *
	 * The object the user will interact with during use
	 *
	 * Constructor class initiates empty pointers.  No hardcoded list
	 */

class linked_list {

	constructor() {

		this.head = null;
		this.tail = null;

	}
	
		// Calls list function from the node identified from head pointer
	
	list() {

		if (this.head != null) {	// Ensures head pointer identifies a node

			return this.head.list();

		} else {	// Catches an empty list.  Identified if the pointers in the list don't point at any nodes
			
			return 'No items in list';

		}
	}

		// Calls 'find_previous' function in head node
	
	find_previous(next) {

		return this.head.find_previous(next);

	}

		// Calls 'find_current' function in head node
	
	find_current(content) {

		return this.head.find_current(content);

	}

		// Reverses the linked_list
	
	reverse() {

			// Traverses list recursively reversing the pointers in each node
		this.head.reverse();

			// Handles the pointers of the list to make sure they point at the new head and foot elements
		const tail = this.head;
		this.head = this.tail;
		this.tail = tail;
		return 'List reversed';

	}

		/*
		 * Adds node to list
		 *
		 * Function takes the contents of the node and an identifier for the next node.  Either the content or the object name if known
		 */

	add(content, next) {

			// Makes sure content variable is not null

		if (content != null) {	

				// Checks if item is first node added

			if (this.head != null) {
				
					// Checks if item is added to end of list

				if (next != null) {

						// Handles if given identifier for next node is content/object name/null

					if (typeof next === 'object' && next) {

						const previous = this.find_previous(next);

					} else {

						node = this.find_current(next);
						const previous = this.find_previous(node);

					}
					
						// If previous is null item is added to start of list as next item does not have any parent nodes to worry about
					if (previous == false) {	

						this.head = window['node' + content] = new node(content, next);
						this.tail = window['node' + content];
						return 'First Node created';

					} else {

						previous.edit_next(window['node' + content] = new node(content, next));
						return 'Node created';

					}

					// Adds item to end of list and moves tail pointer across to new node

				} else {

					this.tail.next = window['node' + content] = new node(content, next);
					this.tail = window['node' + content];
					return 'Node created';

				}

				// Handles first node added to list
				
			} else {

				this.head = window['node' + content] = new node(content, next);
				this.tail = window['node' + content];
				return 'Node created';

			}

			// Catches null first variable 'content'
		} else {

			return 'content cannot be null';

		}
	}

		/*
		 * Handles removing a node from list.  Takes 'content' contents
		 *
		 * WORK IN PROGRESS
		 */
	
	remove(node) {

		const previous = this.head.find_current(node);

			// Handles node not found
		if (previous == false) {

			return 'No node in list matching the contents ' + node;

		} else {

			previous.edit_next(node.next);

			if (node.next == null) {

				this.tail = previous;

			}

			node = null;
			return 'Node removed';
		}
	}
}

/*
 * Initialises list object.
 *
 * Program best used in browser console currently
 *
 * Integration with 'node' cli application coming soon
 */

let list = new linked_list();

list.add(1, null);
list.add(2, null);
list.add(3, null);

/*
user();

/*
 * Allows the use of node.js in command line
 *

function user() {
	let readline = require('readline');

	console.log('Type the command or type "help" for options');
	let cmd = readline(':> ');

	switch(cmd) {

		case 'add':

			let contents = '1';
			let next = null;
			list.add(contents, next);

			break;
		case 'list':

			list.list();

			break;
		case 'reverse':

			list.reverse();

			break;
		case 'remove':

			break;
		case 'help':
			return 'add [contents] [next]\n adds node to list.\n\nlist\n lists the current nodes in order of the list\n\nreverse\nreverses the current list of nodes\n\nremove [node(or contents)]\nRemoves a node from the list';
			break;
		default:

			if (cmd == null || cmd == '') {

				return 'Please input command';

			} else {

				return 'Command not recognised';
			}

			break;
	}
}
*/
