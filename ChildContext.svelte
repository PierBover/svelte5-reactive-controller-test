<script>
	import {getContext} from 'svelte';

	const context = getContext('controller');
</script>

{#if context.controller}
	<h1>Passed by context</h1>
	<h2>{context.controller.name}</h2>
	<h3>{context.controller.randomNumber}</h3>
{/if}