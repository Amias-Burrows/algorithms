function sort(method, list) {
	switch (method) {
		case 'bubble':
			if (list != null) {
				let bubble = new bubble_sort(list);
				bubble.print();
				bubble.sort();
				bubble.print();
			} else {
				let bubble = new bubble_sort([7, 2, 10, 9, 8, 1, 3, 5, 4, 6]);
				bubble.print();
				bubble.sort();
				bubble.print();
			}
			bubble.print();
			break;
		case 'bubble_efficient':
			if (list != null) {
				let bubble = new bubble_sort(list);
				bubble.print();
				bubble.efficient_sort();
				bubble.print();
			} else {
				let bubble = new bubble_sort([7, 2, 10, 9, 8, 1, 3, 5, 4, 6]);
				bubble.print();
				bubble.efficient_sort();
				bubble.print();
			}
			break;
		case 'merge':
			if (list != null) {
				let merge = new merge_sort(list);
				merge.print();
				merge.sort();
				merge.print();
			} else {
				let merge = new merge_sort([7, 2, 10, 9, 8, 1, 3, 5, 4, 6]);
				merge.print();
				merge.sort();
				merge.print();
			}
			break;
		default:
			console.log('That`s not how it works');
			break;
	}
}
