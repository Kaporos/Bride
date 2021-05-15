<script>
    export let text;
</script>


<main>
    <button class="act_btn">{ text }</button>
</main>

<style>

    .act_btn {
        background-color: var(--primary);
        border: none;
        outline: none;
        width: 5vw;
        height: 2.5vw;
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
