<script>
    export let text;
    export let textColor = "white";
    export let color = "var(--primary)"
</script>


<main>
    <button class="act_btn" style="background-color: {color};color: {textColor}">{@html text }</button>
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
    }

    .act_btn:hover {
        box-shadow: 4px 7px 15px -5px rgba(0,0,0,0.38);
        cursor: pointer;
        transform: translateY(-5px);
    }


</style>
