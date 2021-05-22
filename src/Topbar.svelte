<script>

    import ActionButton from "./utils/ActionButton.svelte"
    import {createEventDispatcher} from "svelte";
    var dispatch = createEventDispatcher()

    function newColl() {
        console.log("NEw")
        dispatch("new")
    }

</script>

<main>
    <div id="topbar" class="part">

        <p id="brand">
            Brite
        </p>
        <div id="addBtn">
            <ActionButton on:click={newColl} text="Nouvelle Collection" color="var(--background)" textColor="var(--dark)"/>

        </div>

    </div>

</main>



<style>


    #addBtn {
        margin-right: 15px;
    }

    #topbar {

        width: 100%;
        height: 8vh;
        background-color: var(--dark);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Gilroy",serif
    }

    #brand {
        color: var(--light);
        font-size: 25px;
        font-weight: bold;
        padding-left: 15px;

    }
</style>

