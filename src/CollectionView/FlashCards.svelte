<script>
    import FlashPreview from "../utils/FlashPreview.svelte"
    import IconButton from "../utils/IconButton.svelte"

    export let cards;

</script>

<main>
    <div id="cards">

        <div id="bar">
            <p>Cards</p>
            <div id="buttons">
                <IconButton icon="fas fa-list" />
                <IconButton icon="fas fa-sort-amount-up" />
            </div>
        </div>

        {#each cards as card}
        <FlashPreview status="{card.status}" term="{card.term}" definition="{card.definition}"/>
        {/each}
    </div>

</main>

<style>

    #cards {
        padding-top: 2vh;
        min-width: 0;
        min-height: 0;
        width: 50%;

    }

    #cards p{
        font-weight: bold;
        font-size: 1.8vw;
        color: var(--dark);

    }

    #bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4vh;

    }

    #buttons {
        display: flex;
    }
</style>
