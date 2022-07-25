function search(method, value) {
	switch(method) {
		case 'binary':
			console.log('This is a Binary Search');
			binary.search(value, 0, binary.list.length - 1);
			break;
		default:
			return 'That doesn`t work like that';
			break;
	}
}
