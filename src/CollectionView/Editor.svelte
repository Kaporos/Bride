<script>
    import ActionButton from "../utils/ActionButton.svelte";
    import Tagify from '@yaireo/tagify'
    import "@yaireo/tagify/dist/tagify.css"


    let tagsInput;
    let tagify;

    onMount(() => {
        tagify = new Tagify(tagsInput);
    });


    import {createEventDispatcher, onMount} from "svelte";


    let dispatch = createEventDispatcher()

    export let collection;

    function addCard() {
        collection.cards.push({
            term: "",
            definition: "",
            points: 0
        })
        collection = collection
    }

    function delCard(card) {
        let index = collection.cards.indexOf(card)
        collection.cards.splice(index, 1)
        collection = collection
    }

    async function save(){
        collection.tags = tagify.value.map(v => v.value)
        dispatch("save")
    }


</script>


<main>
    <div id="editor">


        <div class="titlebar" id="toptitle">
            <p id="maintitle">Édition</p>
            <div id="saveBtn">
                <ActionButton on:click={save} text="Sauver"/>

            </div>
        </div>

        <div id="global">
            <input type="text" placeholder="Titre" bind:value={collection.title}>
            <input type="text" placeholder="Auteur" bind:value={collection.author}>
            <input  class="tagify" type="text" placeholder="Tags" bind:this={tagsInput} value='{collection.tags.join(",")}'>
        </div>

        <div id="cards">
            <div class="titlebar">
                <p>Cards</p>
                <div id="addBtn">
                    <ActionButton on:click={addCard} text="Ajouter" color="var(--dark)"/>

                </div>
            </div>

            {#each [...collection.cards].reverse() as card}

            <div class="card">
                <input type="text" bind:value={card.term} placeholder="Term">
                <i class="fas fa-long-arrow-alt-right"></i>
                <input type="text" bind:value={card.definition} placeholder="Definition">
                <div class="delbtn">
                    <ActionButton on:click={delCard(card)} text="<i class='fas fa-times'></i>" color="var(--danger)"/>

                </div>


            </div>
            {/each}





        </div>

    </div>
</main>

<style>


    #editor .tagify {
        outline: none;
        border: none;
        background-color: var(--light);
        filter: brightness(95%);
        width: 100%;
        padding: 10px 15px 10px 15px;
        border-radius: 5px;
        font-family: inherit;
        margin-bottom: 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        --tag-bg: rgba(0,0,0,.1);
        --tag-text-color: var(--dark);
        --tag-hover: rgba(0,0,0,.2);
        --tag-invalid-bg: rgba(255,0,0,.4)
    }

    #editor{
        padding-top: 80px;
        width: 50%;

    }

    #global {
        display: flex;
        flex-direction: column;
    }

    #maintitle {
        position: relative;
    }
    #maintitle::after {
        content: "";
        display: block;
        position: absolute;
        bottom:-2px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: var(--accent);

    }

    #toptitle {
        margin-bottom: 50px;
    }

    input{
        outline: none;
        border: none;
        background-color: var(--light);
        filter: brightness(95%);
        width: 100%;
        height: 6vh;
        border-radius: 5px;
        font-family: inherit;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 5px;
        box-sizing: border-box;
    }

    #cards {
        margin-top: 15px;
        width: 100%;

    }

    p {
        font-weight: bold;
        font-size: 1.8vw;
        color: var(--dark);
    }

    .card {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card i {
        font-size: 2vw;
        margin: 0 15px 0 15px;
    }

    #addBtn {
        margin-top: 15px;
        display: grid;
        place-items: center;
    }
    .titlebar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 15px;
    }

    .delbtn {
        margin-left: 5px;
    }



</style>
