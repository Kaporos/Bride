<script>

    import {createEventDispatcher} from "svelte";
    import {scale, fade} from "svelte/transition"
    let dispatch = createEventDispatcher()

    function toogle() {
        dispatch("close")
    }

</script>


<main>
    <div id="popupBg" >

        <div id="popup" transition:scale="{{duration: 100, start: 0.9}}">
            <div id="controls">
                <button on:click={toogle}><i class="fas fa-times"></i></button>
            </div>
            <div id="content">
                This is my popup content

            </div>
        </div>
    </div>
</main>

<style>
    #popupBg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: var(--dark-popup);
        display: grid;
        place-items: center;
    }

    #controls {
        position: absolute;
        right: 0;
        top: 0;
    }

    button {
        position: absolute;
        top: -1vw;
        right: -1vw;
        border-radius: 50%;
        border: none;
        width: 2vw;
        height: 2vw;
        background-color: rgba(0,0,0);
        font-family: "Gilroy", serif;
        color: var(--light);

    }

    button i {
        transition: all .2s;
    }

    button:hover i{
        transform: rotate(45deg);
    }
    button:hover {
        cursor: pointer;
    }



    #popup {
        background-color: var(--light);
        width: 55%;
        height: 90%;
        position: relative;
        border-radius: 25px;
    }
    #content {
        padding: 25px;

    }


</style>
