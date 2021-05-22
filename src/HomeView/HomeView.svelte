<script>
    import CollectionCard from "./CollectionCard.svelte"
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let collections;


    let filter = ""

    function normalize(text) {
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        /* To lower case and remove accents */
    }


    $: collectionsOk = collections.filter(collection => {
        let normalizedFilter = normalize(filter)
        if (normalizedFilter === "") {
            return collection
        }
        else {
            if (normalize(collection.title).includes(normalizedFilter) || normalize(collection.author).includes(normalizedFilter)) {
                return collection
            }
            let ok = false
            collection.tags.forEach((tag) => {
                if (normalize(tag).includes(normalizedFilter)) {
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

    }

</script>

    <div id="content">
        <input type="text" bind:value={filter} placeholder="Recherche">

        <div id="cards">



            {#each collections as collection}
                {#if collectionsOk.includes(collection)}
                <CollectionCard on:click={choose(collection)}  collection={collection} />
                {/if}

            {/each}
        </div>
    </div>


<style>

    #cards {
        height: 100%;
        max-height: 84vh;
        background-color: var(--background);
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        justify-content: center;
    }
    #content {
        width: 95%;
        height: 100%;
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
