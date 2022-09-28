console.log('Factory Method');

class Window {
	constructor() {
		this.width;
		this.height;
		this.glass;
	}
}

class DGU_CLR extends Window {
	constructor() {
		this.bar_size;
		this.bar_width;
		this.type;
	}
}

class DGU_PTX extends DGU_CLR {
	constructor() {
		this.ptx;
	}
}

class SGU_CLR extends Window {
	constructor(){
		this.bevel;
		this.radius;
	}
}

class SGU_PTX extends SGU_CLR {
	constructor() {
		this.ptx;
	}
}

class Window_Factory {
	constructor()
}