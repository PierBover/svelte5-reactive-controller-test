export let counter = $state({count: 0});

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
		counter.count ++;
	}
}