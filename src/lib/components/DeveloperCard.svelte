<script lang="ts">
    import type {IDeveloper} from "../types/Developer";

    export let dev: IDeveloper;
</script>

<div class="col-4 dev-card">
    <div class="bg-white rounded shadow-sm py-5 px-4"><img
            src="{dev.developerImageURL}" alt="" width="100"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
        <h5 class="mb-0">{dev.developerName}</h5>
        <span class="small text-uppercase text-muted">Aspiring {dev.developerAreaOfInterest}</span>
        <p>{dev.developerDescription}</p>
        <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item">
                <a href={dev.developerSocialLinks.facebook} class="social-link">
                    <img src="/assets/fb.png" width="30" alt="">
                </a>
            </li>
            <li class="list-inline-item">
                <a href="{dev.developerSocialLinks.twitter}" class="social-link">
                    <img src="/assets/twitter.png" width="30" alt="">
                </a>
            </li>
            <li class="list-inline-item">
                <a href="{dev.developerSocialLinks.instagram}" class="social-link">
                    <img src="/assets/ig.png" width="30" alt="">
                </a>
            </li>
            <li class="list-inline-item">
                <a href="{dev.developerSocialLinks.linkedin}" class="social-link">
                    <img src="/assets/linkedin.png" width="30" alt="">
                </a>
            </li>
            <li class="list-inline-item">
                <a href="mailto:{dev.developerSocialLinks.email}" class="social-link">
                    <img src="/assets/mail.png" width="30" alt="">
                </a>
            </li>
        </ul>
    </div>
</div>


<style>
    .dev-card {
        min-height: 400px;
        min-width: 20rem;
        max-width: 18rem;
    }
</style>