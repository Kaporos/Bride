<script>
    import TitleBar from "./TitleBar.svelte"
    import Status from "./Status.svelte"
    import FlashCards from "./FlashCards.svelte"

</script>


<main>
    <div id="main" class="part">

        <div id="wrapper">
            <TitleBar collectionName="Unit 2: Vocabulary"/>
            <Status/>
            <FlashCards/>
        </div>


    </div>

</main>

<style>
    #main {
        width: 80vw;
        height: 92vh;
        max-height: 92vh;
        flex-grow: 0;
        font-family: "Gilroy",serif;
        background-color: var(--background);
        overflow-y: auto;
    }

    #wrapper {
        padding-left: 70px;

    }
</style>


