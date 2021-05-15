<script>
    import Link from "../utils/Link.svelte"
    import ActionButton from "../utils/ActionButton.svelte"
    export let collectionName;

</script>

<main>
    <div id="title">
        <div>
            <Link destination="#" text="<i class='fas fa-long-arrow-alt-left'></i> Return home"/>
            <p id="listname">{ collectionName }</p>

        </div>
        <ActionButton text="Study !"/>
    </div>
</main>


<style>
    #title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 80px;
        width: 65%;
    }

    #title #listname {
        font-weight: bold;
        font-size: 2.2vw;
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
</style>
