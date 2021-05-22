<script>
    import TitleBar from "./TitleBar.svelte"
    import Status from "./Status.svelte"
    import FlashCards from "./FlashCards.svelte"
    import {createEventDispatcher} from "svelte";
    import Editor from "./Editor.svelte";
    import {save} from "../storage/storage"
    import Navbar from "./Navbar.svelte"
    const dispatch = createEventDispatcher();
    export let collection;
    export let collectionId;

    $: edition = collection.title === "";

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


    let study = false;

    function toogleStudy() {
        dispatch("study")
    }

</script>

<div id="main" class="part">
    <Navbar/>
    <div id="big">
        <div id="wrapper">
            {#if !edition}
                <TitleBar on:study={toogleStudy} on:home={goHome} on:edit={toogleEdition} collectionName="{collection.title}"/>
                <Status cards={collection.cards}/>
                <FlashCards cards={collection.cards}/>
            {:else}
                <Editor on:save={saveCollection} collection={collection} collectionId={collectionId}/>
            {/if}


        </div>
    </div>
</div>


<style>
    #main {
        width: 100%;
        height: 92vh;
        max-height: 92vh;
        display: flex;
        font-family: "Gilroy",serif;
        overflow-y: scroll;
    }

    #big {
        width: 50%;
    }

    @media screen and (max-width: 640px){
        #big {
            width: 90%;
            margin-left: 5%;
        }
    }

</style>


