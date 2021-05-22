<script>
	import Topbar from "./Topbar.svelte"
	import Navbar from "./CollectionView/Navbar.svelte"
	import Collection from "./CollectionView/Collection.svelte"
	import HomeView from "./HomeView/HomeView.svelte"
	import {slide, fade} from 'svelte/transition';
	import {collectionsStorage} from "./storage/storage";
	import {onDestroy} from "svelte"
	import Popup from "./EditPopup/Popup.svelte";
	import {save} from "./storage/storage"
	import Studyview from "./StudyView/Studyview.svelte"

	let home = false;

	let study = false;

	function toogleStudy() {
		study = !study
	}

	let collections = []
	let currentCollection = 0
	/* let currentCollection = 0 */

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

	function saveCollection() {
		save(collections)
	}


</script>

<main>
	<div id="app">

		<Topbar on:new={tooglePopup}/>


		{#if study && currentCollection !== 0}
			<Studyview on:quit={toogleStudy} collection={currentCollection} />
		{:else }
			<div id="page">
				{#if currentCollection !== 0}
					<div id="content" transition:slide>
						<Collection on:study={toogleStudy} on:save={saveCollection} on:home={goHome} collection={currentCollection} collectionId={collections.indexOf(currentCollection)}/>
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
		overflow: hidden;
		position: absolute;
		top: 0;
		width: 100vw;
		max-height: 92vh;
	}

	#content {
		display: flex;
		position: absolute;
		top: 0;
		width: 100vw;
	}
</style>
