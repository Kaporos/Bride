<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    import Link from "../utils/Link.svelte"
    import ActionButton from "../utils/ActionButton.svelte"
    export let collectionName;

    function clickHome() {
        dispatch("home", {})
    }

    function clickEdit() {
        dispatch("edit")
    }

    function study() {
        dispatch("study")
    }

</script>

<main>
    <div id="title">
        <div>
            <Link destination="#" on:click={clickHome} text="<i class='fas fa-long-arrow-alt-left'></i> Return home"/>
            <p id="listname">{ collectionName }</p>

        </div>
        <div id="buttons">
            <ActionButton on:click={clickEdit} text="<i class='fas fa-pencil-alt'></i>" color="var(--dark)"/>
            <ActionButton on:click={study} text="Study !"/>

        </div>
    </div>
</main>


<style>
    #title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 80px;
        width: 100%;
    }

    #title #listname {
        font-weight: bold;
        font-size: 2.2vmax;
        color: var(--dark);
        position: relative;
    }


    #title #listname::after {
        content: "";
        display: block;
        position: absolute;
        bottom:-2px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: var(--accent);

    }

    #buttons {
        display: flex;
        gap: 5px;
    }


</style>
