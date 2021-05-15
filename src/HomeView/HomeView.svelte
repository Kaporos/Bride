<script>
    import CollectionCard from "./CollectionCard.svelte"
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let collections;
    console.log(collections)

    function choose(collection) {
        dispatch("choose", {
            collection: collection
        })
        console.log("CLICKED")

    }

</script>

<main>

    <div id="cards">


        {#each collections as collection}

            <CollectionCard  on:click={choose(collection)}  collection={collection} />

        {/each}
    </div>



</main>


<style>

    #cards {
        width: 95%;
        max-height: 92vw;
        padding-top: 50px;
        background-color: var(--background);
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        justify-content: center;
    }

</style>
