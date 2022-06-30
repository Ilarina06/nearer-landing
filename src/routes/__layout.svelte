<script>
  import "../app.scss";
  import "../main.css";
  import Navbar from "../lib/components/Navbar.svelte";
</script>

<div id="bg-img">
    <Navbar/>
    <slot />
</div>


<style>
    #bg-img {
        background-image: url("/assets/bg.jpg");
        background-size: cover;
    }
</style>
