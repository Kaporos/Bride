<script>
    import TitleBar from "./TitleBar.svelte"
    import Status from "./Status.svelte"
    import FlashCards from "./FlashCards.svelte"
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    export let collection;


    function goHome() {
        dispatch("home", {})
    }

</script>


<main>
    <div id="main" class="part">

        <div id="wrapper">
            <TitleBar on:click={goHome} collectionName="{collection.title}"/>
            <Status cards={collection.cards}/>
            <FlashCards cards={collection.cards}/>
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
        overflow-y: auto;
    }

    #wrapper {
        padding-left: 70px;

    }
</style>


