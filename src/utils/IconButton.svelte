<script>
    export let icon;
</script>

<main>
    <button class="min_btn">
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
        transition: all .2s;
        transform: scale(1.05);
        margin-right: 5px;

    }

    .min_btn:hover {
        cursor: pointer;

    }

</style>
