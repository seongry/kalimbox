<script lang="ts">
  import Kalimba from "../components/Kalimba/Kalimba.svelte";
  import SaveButton from "../components/SaveButton.svelte";
  import Sheet from "../components/Sheet/Sheet.svelte";
</script>

<style lang="scss">
  @import "../theme/colors.scss";

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .generator-section {
    width: 100%;
    max-width: 1192px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .kalimba-section {
    width: 100%;

    background-color: $purple200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<main>
  <section class="generator-section">
    <Sheet />
    <section class="kalimba-section">
      <Kalimba />
      <SaveButton />
    </section>
  </section>
</main>
