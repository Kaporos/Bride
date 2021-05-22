<script>
    import FlashPreview from "../utils/FlashPreview.svelte"
    import IconButton from "../utils/IconButton.svelte"
    import {slide} from "svelte/transition"
    export let cards;

    let view = "list"

    function changeView() {
        view = view === "list" ? "card" : "list"
    }


    let isFlipped = false;


    function flip() {
        isFlipped = !isFlipped
    }

    let flipCurrentCard = 0;

    function next() {
        isFlipped = false;
        flipCurrentCard = flipCurrentCard === cards.length - 1 ? 0 : flipCurrentCard + 1
    }
    function previous() {
        isFlipped = false;
        flipCurrentCard = flipCurrentCard === 0  ? cards.length - 1 : flipCurrentCard - 1
    }


    let sortFromRed = true;

    function sortCards(a,b) {
        let x = a.points
        let y = b.points
        if (sortFromRed) {
            console.log("Jean")
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        }
        console.log("hello")
        return ((x < y) ? 1 : ((x > y) ? -1 : 0))
    }



    $: sortedCards = cards.sort(sortCards)

    function toogleSort() {
        sortFromRed = !sortFromRed;
        sortedCards = cards.sort(sortCards)

    }


</script>

<main>
    <div id="cards">

        <div id="bar">
            <p>Cards</p>
            <div id="buttons">
                <IconButton on:click={changeView} icon="{view === 'list' ? 'fas fa-list' : 'fas fa-retweet'}" />
                <IconButton on:click={toogleSort} icon="fas fa-sort-amount-{sortFromRed ? 'up' : 'down'}" />
            </div>
        </div>


        {#if view === "list"}
        {#each sortedCards as card}
            <FlashPreview points="{card.points}" term="{card.term}" definition="{card.definition}"/>
        {/each}
        {/if}
        {#if view === "card"}
            <div id="reverse">
                <div class="scene">
                    {#each cards as card}
                        {#if card === cards[flipCurrentCard]}
                                <div  on:click={flip} class="card {isFlipped ? 'is-flipped' : '' }">
                                    <div class="card__face card__face--front"><p>{ cards[flipCurrentCard].term }</p></div>
                                    <div class="card__face card__face--back">{ cards[flipCurrentCard].definition }</div>
                                </div>
                        {/if}
                    {/each}
                </div>
                <div id="controls">
                    <i on:click={previous} class="fas fa-arrow-left"></i>
                    <i on:click={next} class="fas fa-arrow-right"></i>
                </div>
            </div>


        {/if}

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

    #reverse {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .scene {
        width: 45%;
        margin: auto;
        height: 10vw;
        border: 1px solid #CCC;
        perspective: 800px;
        border-radius: 5px;

    }

    .card {
        width: 99.5%;
        height: 100%;
        transition: transform .6s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
        background-color: var(--light);
        border-radius: 5px;
    }

    .card.is-flipped {
        transform: rotateX(180deg);
    }

    .card__face {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: var(--dark);
        font-weight: bold;
        font-size: 1.8vw;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: grid;
        place-items: center;
        text-align: center;


    }

    .card__face--front {
        background: var(--light);
    }

    .card__face--back {
        background: var(--light);
        transform: rotateX(180deg);
    }


    #controls {
        display: flex;
        align-items: center;
    }

    #controls > * {
        padding: 10px 25px 10px 25px;
        font-size: 1vw;
    }

    #controls i:hover {
        cursor: pointer;
    }
</style>
