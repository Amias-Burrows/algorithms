console.log('Reversing Singly Loaded');
class node {
	constructor(content, next) {
		this.content = content;
		this.next = next;
	}

	edit_next(next) {
		this.next = next;
	}

	reverse(previous) {
		if (this.next == null) {
			this.next = previous;
		} else {
			const next_item = this.next;
			this.next = previous;
			next_item.reverse(this);
		}
	}

	find_previous(next) {
		if (this.next == null) {
			return false;
		} else if (this.next == next) {
			return this;
		} else {
			return this.next.find_previous(next);
		}
	}

	find_current(content) {
		if (this.content == content) {
			return this;
		} else if (this.next != null) {
			return this.next.find_current(content);
		} else {
			return false;
		}
	}

	list() {
		if (this.next == null) {
			return this.content + ' ||';
		} else {
			return this.content + ' -> ' + this.next.list();
		}
	}
}

class linked_list {
	constructor() {
		this.head = null;
		this.foot = null;
	}
	
	list() {
		if (this.head != null) {
			return this.head.list();
		} else {
			return 'No items in list';
		}
	}

	find_previous(next) {
		return this.head.find_previous(next);
	}

	find_current(content) {
		return this.head.find_current(content);
	}

	reverse() {
		this.head.reverse();
		const foot = this.head;
		this.head = this.foot;
		this.foot = foot;
		return 'List reversed';
	}

	add(content, next) {
		if (content != null) {	// Makes sure content variable is not null
			if (this.head != null) {	// Checks if item is first node added
				if (next != null) {	// Checks if item is added to end of list
					if (typeof next === 'object' && next) {
						const previous = this.find_previous(next);
					} else {
						node = this.find_current(next);
						const previous = this.find_previous(node);
					}
					if (previous == false) {	// If previous is null item is added to start of list
						this.head = window['node' + content] = new node(content, next);
						this.foot = window['node' + content];
						return 'First Node created';
					} else {
						previous.edit_next(window['node' + content] = new node(content, next));
						return 'Node created';
					}
				} else {
					this.foot.next = window['node' + content] = new node(content, next);
					this.foot = window['node' + content];
					return 'Node created';
				}
			} else {
				this.head = window['node' + content] = new node(content, next);
				this.foot = window['node' + content];
				return 'Node created';
			}
		} else {
			return 'content cannot be null';
		}
	}

	remove(node) {
		const previous = this.head.find_current(node);
		if (previous == false) {
			this.head = node.next;
			node = null;
			return 'Node removed';
		} else {
			previous.edit_next(node.next);
			if (node.next == null) {
				this.foot = previous;
			}
			node = null;
			return 'Node removed';
		}
	}
}

let list = new linked_list();
