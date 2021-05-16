<script>
	import Topbar from "./Topbar.svelte"
	import Navbar from "./CollectionView/Navbar.svelte"
	import Collection from "./CollectionView/Collection.svelte"
	import HomeView from "./HomeView/HomeView.svelte"
	import {slide, fade} from 'svelte/transition';
	import {collectionsStorage} from "./storage/storage";
	import {onDestroy} from "svelte"
	import Popup from "./EditPopup/Popup.svelte";

	let home = false;

	let collections = []
	let currentCollection = 0

	let popup = false;

	function tooglePopup() {
		popup = !popup;
	}

	const unsuscribe = collectionsStorage.subscribe(value => collections = value)
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

		<Topbar on:new={tooglePopup}/>

		<div id="page">
			{#if currentCollection !== 0}
				<div id="content" transition:slide>
					<Navbar/>
					<Collection on:home={goHome} collection={currentCollection}/>
				</div>
			{:else }
				<div id="home" in:fade="{{delay:200}}">
					<HomeView on:choose={setCollection} collections={collections} />
				</div>
			{/if}
		</div>
		{#if popup}
		<Popup on:close={tooglePopup}/>
		{/if}

	</div>

</main>

<style>
	#app {
		height: 100vh;

	}

	#page {
		width: 100vw;
		position: relative;
	}

	#home {
		overflow: auto;
		max-height: 92vh;
		position: absolute;
		top: 0;
		width: 100vw;
	}

	#content {
		display: flex;
		position: absolute;
		top: 0;
		width: 100vw;
	}
</style>
