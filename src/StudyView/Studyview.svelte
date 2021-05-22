<script>
    import {createEventDispatcher} from "svelte";
    import IconButton from "../utils/IconButton.svelte";
    import {scale} from "svelte/transition"

    export let collection;

    var dispatch = createEventDispatcher()

    function close() {
        dispatch("quit")
    }


</script>


<main>
    <div id="study">
        <div id="header">

            <div id="left">
                <IconButton on:click={close} icon="fas fa-arrow-left"/>
                <p>{ collection.title }</p>
            </div>

            <div id="center">STATUS DE L'ÉTUDE( cartes connues, etc) </div>
            <div id="right">JSP QUOI METTRE ICI</div>
        </div>

        <div id="zone" in:scale="{{delay: 500}}">
            QUESTION
        </div>
    </div>

</main>

<style>

    #study {
        padding: 25px;
        display: flex;
        flex-direction: column;
        height: 85vh;

    }

    #header {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        height: 5vh;

    }


    #left {
        display: flex;
        align-items: center;
    }

    #left p {
        font-size: 1.5vw;
        padding-left: 15px;
    }

    #center {
        text-align: center;
    }

    #right {
        text-align: right;
    }

    #zone {
        flex-grow: 1;
        height: 100%;
        margin: 15vh 30vw;
        background-color: var(--light);
        border-radius: 5px;
        display: grid;
        place-items: center;
    }



</style>
