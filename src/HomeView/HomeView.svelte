<script>
    import CollectionCard from "./CollectionCard.svelte"
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let collections;
    console.log(collections)


    let filter = ""

    $: collectionsOk = collections.filter(collection => {
        if (filter === "") {
            return collection
        }
        else {
            if (collection.title.includes(filter) || collection.author.includes(filter)) {
                return collection
            }
            let ok = false
            collection.tags.forEach((tag) => {
                if (tag.includes(filter)) {
                    ok = true
                }
            })
            if (ok) {
                return collection
            }
        }
    })

    function choose(collection) {
        dispatch("choose", {
            collection: collection
        })
        console.log("CLICKED")

    }

</script>

<main>

    <div id="content">
        <input type="text" bind:value={filter} placeholder="Recherche">

        <div id="cards">



            {#each collectionsOk as collection}

                <CollectionCard  on:click={choose(collection)}  collection={collection} />

            {/each}
        </div>
    </div>




</main>


<style>

    #cards {
        max-height: 92vw;
        padding-top: 50px;
        background-color: var(--background);
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        justify-content: center;
    }
    #content {
        width: 95%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        outline: none;
        border: none;
        background-color: var(--light);
        filter: brightness(95%);
        width: 50%;
        height: 5vh;
        border-radius: 5px;
        font-family: inherit;
        padding-left: 15px;
        padding-right: 15px;
    }

</style>
