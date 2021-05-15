<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    export let destination;
    export let text;
    function click() {
        dispatch("click", {})
    }
</script>

<main>
    <a href="{destination}" on:click={click} class="link">{@html text}</a>
</main>


<style>
    .link {
        text-decoration: none;
        color: var(--primary);
        position: relative;
    }

    .link::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 2.5px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: right;
        background-color: var(--primary);
        transition: all .3s;
    }

    .link:hover::after {
        transform: scaleX(1);
    }
</style>
