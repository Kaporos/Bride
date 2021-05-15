<script>
    import {createEventDispatcher} from "svelte";

    let dispatch = createEventDispatcher()

    export let icon;

    function click() {
        dispatch("click")
    }
</script>

<main>
    <button on:click={click} class="min_btn">
        <i class="{icon}"></i>
    </button>
</main>

<style>

    .min_btn {
        border: none;
        outline: none;
        background-color: var(--light);
        filter: brightness(95%);
        padding: 5px 15px 5px 15px;
        color: var(--dark);
        border-radius: 5px;
        transition: all .1s;
        transform: scale(1.05);
        margin-right: 5px;

    }

    .min_btn:hover {
        cursor: pointer;
        filter: brightness(90%);


    }

</style>
