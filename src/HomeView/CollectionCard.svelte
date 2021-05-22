<script>
    import {createEventDispatcher} from "svelte";
    import {blur} from "svelte/transition"
    const dispatch = createEventDispatcher();
    export let collection;

    $: ok = collection.cards.filter(card => card.points > 10).length
    $: semi = collection.cards.filter(card => card.points < 10 && card.points >= 5).length
    $: none = collection.cards.filter(card => card.points < 5).length
    $: total = ok + semi + none


    function click() {
        dispatch("click", {})
    }

</script>

    <div class="card" on:click={click}>

        <div class="content">
            <div id="title">{ collection.title }</div>
            <div id="author">Par { collection.author }</div>
            <ul id="tags">
                {#each collection.tags as tag}
                <li class="tag"> { tag }</li>
                {/each}
            </ul>

        </div>

        <div class="bottom">
            <div class="status">
                <p class="number">{ ok }</p>
                <p class="context">Connus</p>
            </div>
            <div class="status">
                <p class="number">{ semi }</p>
                <p class="context">Abordé</p>
            </div>
            <div class="status">
                <p class="number">{ none }</p>
                <p class="context">Inconnus</p>
            </div>
            <div class="status">
                <p class="number">{ total }</p>
                <p class="context">Total</p>
            </div>

        </div>
    </div>



<style>

    .card {
        flex-grow: 1;
        max-width: 300px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--background);
        border-bottom: 5px solid var(--accent);
        font-weight: bold;
        margin: 50px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        transition: all .2s;
    }

    .card:hover {
        background-color: var(--light);
        transform: scale(1.15);
        cursor: pointer;

    }


    .content {
        color: var(--dark);
        padding: 10px;
    }

    #title {
        font-size: 20px;

    }

    #tags {
        list-style: none;
        display: flex;
        padding-top: 15px;
        flex-wrap: wrap;

    }

    .tag {
        padding: 5px;
        background-color: var(--dark);
        margin-right: 5px;
        border-radius: 5px;
        color: var(--background);
        margin-bottom: 5px;
        font-size: 14px;


    }

    .bottom {
        display: flex;
        justify-content: space-evenly;
        border-top: 1px solid var(--dark);
    }
    .status {
        width: 25%;
        padding: 5px;

        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--dark);
        font-size: 13px;


    }

    .number {
        font-weight: 900;
        font-size: 15px;
    }

    .status:not(:last-child) {
        border-right: 1px solid var(--dark);

    }




</style>

