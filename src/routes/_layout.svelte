<script lang="ts">
  import Footer from "../components/common/Footer.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment: string;
</script>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
</style>

<Nav segment={segment} />

<section>
  <slot />
</section>
<Footer />
