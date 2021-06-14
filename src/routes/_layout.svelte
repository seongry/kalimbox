<script lang="ts">
	import Footer from '../components/common/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
<Footer/>