<script>

    import ActionButton from "./utils/ActionButton.svelte"

</script>

<main>
    <div id="topbar" class="part">

        <p id="brand">
            Brite
        </p>
        <div id="addBtn">
            <ActionButton text="Nouvelle Collection" color="var(--background)" textColor="var(--dark)"/>

        </div>

    </div>

</main>



<style>


    #addBtn {
        margin-right: 50px;
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
        font-size: 2vw;
        font-weight: bold;
        padding-left: 15px;

    }
</style>

