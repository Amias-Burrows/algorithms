console.log('Factory Method');

class Window {
	constructor() {
		this.width;
		this.height;
	}
}

class DGU_CLR extends Window {
	constructor(width, height, bar_colour, bar_width, type) {
		super.width = width;
		super.height = height;
		this.bar_colour = bar_colour;
		this.bar_width = bar_width;
		this.type = type;
	}
}

class SGU_CLR extends Window {
	constructor(width, height, bevel, radius){
		super.width = width;
		super.height = height;
		this.bevel = bevel;
		this.radius = radius;
	}
}

class Window_Factory {
	build_window(request) {
		let window = null;
		switch(request[0]) {
			case DGU_CLR:
				window = new DGU_CLR(request[1], request[2], request[3], request[4], request[5]);
				break;
			case SGU_CLR:
				window = new SGU_CLR(request[1], request[2], request[3], request[4]);
				break;
		}
	}
}

class Shop {
	constructor(request) {
		let factory = new Window_Factory();
		let window = factory.build_window(request)
	}
}