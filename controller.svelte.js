export let _counter = $state({count: 0});

export class Controller {
	currentTime = $state(new Date());
	count = $state(0);

	constructor () {
		setInterval(() => {
			this.currentTime = new Date();
		}, 1000);
	}

	add () {
		this.count ++;
		_counter.count ++;
	}
}

export function createController () {
	let count = $state(0);

	function add () {
		count ++;
	}

	return {
		get count() {return count},
		add
	}
}

export function createSwitchableController (name) {
	let randomNumber = $state(0);

	setInterval(() => {
		randomNumber = Math.random();
	}, 1000);

	return {
		name,
		get randomNumber() {return randomNumber},
	}
}