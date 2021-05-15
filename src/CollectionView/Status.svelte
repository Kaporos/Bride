<script>
    import Card from "../utils/Card.svelte"

</script>

<main>

    <div id="progress">

        <Card status="Connus" number="2"/>
        <Card status="Abordés" number="1"/>
        <Card status="Inconnus" number="2"/>
        <Card status="Total" number="5"/>

    </div>


</main>

<style>
    #progress {
        display: flex;
        align-items: center;
        width: 65%;
        justify-content: space-between;
    }

    #progress {
        padding-top: 10px;
    }
</style>
