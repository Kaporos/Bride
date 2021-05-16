<script>
    import {createEventDispatcher} from "svelte";

    export let text;
    export let textColor = "white";
    export let color = "var(--primary)"
    export let rotate = false
    export let fly = true
    export let shadow = true;

    $: rotation =  rotate ? "45deg" : "0deg";
    $: flyHigh =  fly ? "-5px" : "0";
    $: shadowOpa =  shadow ? "0.38" : "0";

    let dispatch = createEventDispatcher()

    function click() {
        dispatch("click")

    }

</script>


<main>
    <button on:click={click} class="act_btn" style="background-color: {color};color: {textColor};--rotation: {rotation};--fly: {flyHigh};--shadow: {shadowOpa}"><p>{@html text }</p></button>
</main>

<style>

    .act_btn {
        border: none;
        outline: none;
        padding: 15px 20px 15px 20px;
        border-radius: 5px;
        color: white;
        font-family : inherit;
        transition: all .2s;
        display: grid;
        place-items: center;
    }

    .act_btn p {
        transition: all .5s;
    }

    .act_btn:hover {
        box-shadow: 4px 7px 15px -5px rgba(0,0,0,var(--shadow));
        cursor: pointer;
        transform: translateY(var(--fly));
    }

    .act_btn:hover p {
        transform:  rotate(var(--rotation));
    }


</style>
