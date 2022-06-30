<script lang="ts">
    import DeveloperCard from "../lib/components/DeveloperCard.svelte";
    import { devStore } from "../lib/stores/developerStore";
</script>

<div class="bg-light py-2" id="bg-img">
    <div class="container py-3">
        <div class="row mb-4">
            <div class="col-lg-12 d-flex justify-content-center flex-column align-items-center">
                <h2 class="display-4 font-weight-light">The NearER Team</h2>
                <p class="font-italic text-muted">Check out the developing and research team of NearER!</p>
            </div>
        </div>

        <div class="row text-center d-flex justify-content-center align-items-center">
            {#await $devStore}
                Waiting for data
            {:then devs}
                {#each devs as dev}
                    <DeveloperCard dev={dev}/>
                {/each}
            {/await}
        </div>
    </div>
</div>

<style>
    #bg-img {
        background-image: url("/assets/bg.jpg");
        background-size: cover;
    }
</style>