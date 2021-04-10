<script lang="ts">
  import Kalimba from "./components/Kalimba/Kalimba.svelte";
</script>

<style lang="scss">
  @import "./theme/colors.scss";
  main {
    display: flex;
    justify-content: center;
  }
  .kalimba-section {
    width: 100%;
    max-width: 1192px;
    height: 438px;

    background-color: $dark_gray;
    display: flex;
    justify-content: center;
  }
</style>

<main>
  <section class="kalimba-section">
    <Kalimba />
  </section>
</main>
