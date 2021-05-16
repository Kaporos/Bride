<script>
    import TitleBar from "./TitleBar.svelte"
    import Status from "./Status.svelte"
    import FlashCards from "./FlashCards.svelte"
    import {createEventDispatcher} from "svelte";
    import Editor from "./Editor.svelte";
    import {save} from "../storage/storage"
    const dispatch = createEventDispatcher();
    export let collection;
    export let collectionId;

    export let edition = false;

    function toogleEdition() {
        edition = !edition
    }

    function goHome() {
        dispatch("home", {})
    }

    function saveCollection() {
        toogleEdition()
        dispatch("save")
    }

</script>


<main>
    <div id="main" class="part">

        <div id="wrapper">
            {#if !edition}
            <TitleBar on:home={goHome} on:edit={toogleEdition} collectionName="{collection.title}"/>
            <Status cards={collection.cards}/>
            <FlashCards cards={collection.cards}/>
            {:else}
            <Editor on:save={saveCollection} collection={collection} collectionId={collectionId}/>
            {/if}


        </div>


    </div>

</main>

<style>
    #main {
        width: 80vw;
        height: 92vh;
        max-height: 92vh;
        flex-grow: 0;
        font-family: "Gilroy",serif;
        overflow-y: scroll;
    }

    #wrapper {
        padding-left: 70px;

    }
</style>


