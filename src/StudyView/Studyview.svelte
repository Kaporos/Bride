<script>
    import {createEventDispatcher} from "svelte";

    export let collection;

    var dispatch = createEventDispatcher()

    function close() {
        dispatch("quit")
    }


</script>


<main>
    <div id="study">
        This is my study view

        <button on:click={close}>Fermer</button>
    </div>

</main>

<style>



</style>
