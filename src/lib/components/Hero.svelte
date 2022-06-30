<script lang="ts">
    import Carousel from "./Carousel.svelte";

    export let heroVersion: number = 1;
    const downloadLink: string = "https://drive.google.com/u/0/uc?id=1A9-Wf3h3-o9w7KTJdSC7_gXajEJCxJcj&export=download";
</script>

{#if heroVersion === 1}
    <div class="container col-xxl-12 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6 carousel-border">
                <Carousel/>
            </div>
            <div class="col-lg-6">
                <div class="lc-block mb-3">
                    <div editable="rich">
                        <h2 class="fw-bold display-5">NearER</h2>
                    </div>
                </div>

                <div class="lc-block mb-3">
                    <div editable="rich">
                        <p class="lead">
                            NearER mobile application is here to provide fast service with just pressing a simple circle. Patients should download this mobile application to start calling for help when needed.
                             <br><br>
                            You can download this application by pressing the 'Download Now' button below.
                        </p>
                    </div>
                </div>

                <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                <a class="btn btn-colored px-4 me-md-2" href={downloadLink} role="button">
                    Download Now
                </a>
                </div>
            </div>
        </div>
    </div>
{/if}

{#if heroVersion === 2}

{/if}

<style>
    .btn-colored {
        background-color: #00E0B8;
        color: white;
    }

     .carousel-border {
         border-radius: 10px;
     }
</style>