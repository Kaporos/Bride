<script>
    import {slide} from "svelte/transition"
    export let term;
    export let definition;
    export let points;


    $: status = points > 10 ?  "ok" : points < 5 ? "none" : "semi"

</script>

<main>
    <div class="{status} flash" in:slide>
        <div class="term">{ term }</div>
        <div class="definition"> { definition }</div>

    </div>
</main>

<style>

    .flash {
        background-color: var(--light);
        width: 100%;
        height: 8vh;
        margin-bottom: 15px;
        border-radius: 15px;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;

    }

    .ok {
        border-bottom: 4px solid var(--known);
    }

    .semi {
        border-bottom: 4px solid var(--semi);

    }

    .none {
        border-bottom: 4px solid var(--none);

    }



    .flash div {
        margin: auto;
    }

    .flash::after {
        content: "";
        position: absolute;
        left: 50%;
        height: 50%;
        top: 25%;
        width: 1px;
        background-color: var(--light);
        filter: brightness(60%);
    }
</style>
