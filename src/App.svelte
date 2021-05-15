<script>
	import Topbar from "./Topbar.svelte"
	import Navbar from "./CollectionView/Navbar.svelte"
	import Collection from "./CollectionView/Collection.svelte"
	import HomeView from "./HomeView/HomeView.svelte"

	import { collectionsStorage} from "./storage/storage";
	import { onDestroy } from "svelte"

	let home = false;

	let collections = []
	$: currentCollection = collections[0]


	const unsuscribe = collectionsStorage.subscribe(value => collections = value )
	onDestroy(unsuscribe)

	function setCollection(event) {
		currentCollection = event.detail.collection
	}
	function goHome(event) {
		currentCollection = 0
	}


</script>

<main>
	<div id="app">

		<Topbar/>

		{#if currentCollection !== 0}
		<div id="content">
			<Navbar/>
			<Collection on:home={goHome} collection={currentCollection}/>
		</div>
		{:else }
			<div id="home">
				<HomeView on:choose={setCollection} collections={collections} />

			</div>
		{/if}
	</div>

</main>

<style>
	#app {
		height: 100vh;

	}

	#home {
		overflow: auto;
		max-height: 92vh;
	}

	#content {
		display: flex;
		width: 100%;
	}
</style>
