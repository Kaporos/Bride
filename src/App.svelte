<script>
	import Topbar from "./Topbar.svelte"
	import Navbar from "./Navbar.svelte"
	import Collection from "./CollectionView/Collection.svelte"
</script>

<main>
	<div id="app">

		<Topbar/>

		<div id="content">
			<Navbar/>
			<Collection/>
		</div>
	</div>

</main>

<style>
	#app {
		height: 100vh;

	}

	#content {
		display: flex;
		width: 100%;
	}
</style>
