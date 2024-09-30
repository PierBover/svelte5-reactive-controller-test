<script>
	import {setContext} from 'svelte';
	import Child from "./Child.svelte";
	import ChildContext from "./ChildContext.svelte";

	let currentController = $state(null);

	const context = {
		get controller () {return currentController}
	}

	setContext('controller', context);

	export function setController (controller) {
		currentController = controller;
	}

	$effect(() => {
		if (currentController) console.log(currentController.name);
	});

</script>

<Child controller={currentController}/>
<ChildContext/>