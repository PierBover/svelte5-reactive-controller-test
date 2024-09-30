<script>
	import SwitchController from './SwitchController.svelte';
	import {createSwitchableController} from './controller.svelte';

	const first = createSwitchableController('first');
	const second = createSwitchableController('second');

	let switcher;

	function setController (controller) {
		switcher.setController(controller);
	}

	$effect(() => {
		setController(first);
	});

</script>

<button onclick={() => setController(first)}>First</button>
<button onclick={() => setController(second)}>Second</button>

<SwitchController bind:this={switcher}></SwitchController>