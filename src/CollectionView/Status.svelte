<script>
    import Card from "../utils/Card.svelte"
    export let cards;

    $: ok = cards.filter(card => card.points > 10).length
    $: semi = cards.filter(card => card.points < 10 && card.points >= 5).length
    $: none = cards.filter(card => card.points < 5).length
    $: total = ok + semi + none

</script>

<main>

    <div id="progress">

        <Card status="Connus" number="{ok}"/>
        <Card status="Abordés" number="{semi}"/>
        <Card status="Inconnus" number="{none}"/>
        <Card status="Total" number="{total}"/>

    </div>


</main>

<style>
    #progress {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        overflow: auto;
    }



    #progress {
        padding-top: 10px;
    }
</style>
