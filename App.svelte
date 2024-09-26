<script>
	import {Controller, counter} from './controller.svelte';

	const controller = new Controller();

	function onclick () {
		controller.add();
	}

</script>

<h1>Test</h1>

<h2>{controller.currentTime}</h2>

<h3>{controller.count} {counter.count}</h3>

<button {onclick}>Moar count</button>