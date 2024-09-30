<script>
	const {controller} = $props();

</script>

{#if controller}
	<h1>Passed by prop</h1>
	<h2>{controller.name}</h2>
	<h3>{controller.randomNumber}</h3>
{/if}