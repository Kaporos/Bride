<script>
    export let status;
    export let number;
</script>

<main>
    <div class="card">
        <div class="content">

            <p class="number"> { number }</p>
            <p class="status"> { status }</p>
        </div>

    </div>
</main>


<style>

    .card {
        background-color: var(--light);
        border-radius: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
        position: relative;
        width: 10vmax;
        height: 10vmax;
        display: flex;
        padding: 15px;
    }

    @media screen and (max-width: 640px) {
        .card {
            margin-right: 5px;
        }
    }




    .content {
        align-self: flex-end;
        padding-left: 10px;
        transition: all .3s;

    }

    .number {
        font-weight: 900;
        color: var(--dark);
        font-size: 3vmax;
    }

    .card:hover .content {
        transform: translateY(-10px);
    }
</style>
