<script lang="ts">
  import Kalimba from "../components/Kalimba/Kalimba.svelte";
  import SaveButton from "../components/SaveButton.svelte";
  import Sheet from "../components/Sheet/Sheet.svelte";
  import type { SheetType } from "../store";
  import { createSheet } from "../store";

  let initailSheetData: SheetType = {
    title: "",
    notes: [],
  };

  const sheetStore = createSheet(initailSheetData);
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

  .header {
    width: 100%;
    max-width: 1192px;
    height: 72px;
    background-color: $purple100;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $black;
    font-weight: 700;
    font-size: 16px;
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
  <section class="header">칼림바 악보 생성기</section>
  <section class="generator-section">
    <Sheet data={$sheetStore} updateTitle={sheetStore.updateTitle} />
    <section class="kalimba-section">
      <Kalimba updateNotes={sheetStore.updateNotes} />
      <SaveButton />
    </section>
  </section>
</main>
