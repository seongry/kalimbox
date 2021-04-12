<script lang="ts">
  import Kalimba from "../components/Kalimba/Kalimba.svelte";
  import SaveButton from "../components/SaveButton.svelte";
  import Sheet from "../components/Sheet/Sheet.svelte";
</script>

<style lang="scss">
  @import "../theme/colors.scss";

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .kalimba-section {
    width: 100%;
    max-width: 1192px;

    background-color: $dark_gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<main>
  <Sheet />
  <section class="kalimba-section">
    <Kalimba />
    <SaveButton />
  </section>
</main>
