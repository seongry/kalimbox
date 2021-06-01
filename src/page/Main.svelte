<script lang="ts">
  import Footer from "../components/common/Footer.svelte";
  import Menu from "../components/common/icon/Menu.svelte";
  import IconButton from "../components/common/IconButton.svelte";
  import Kalimba from "../components/Kalimba/Kalimba.svelte";
  import SaveButton from "../components/SaveButton.svelte";
  import Sheet from "../components/Sheet/Sheet.svelte";
  import { SPACEBAR } from "../constants/KalimbaKey";
  import type { SheetType } from "../store";
  import { createScale, createSheet } from "../store";

  let initailSheetData: SheetType = {
    title: "",
    notes: [],
  };

  const sheetStore = createSheet(initailSheetData);
  const scaleStore = createScale();
  $: isValid = !!$sheetStore.title && $sheetStore.notes.length > 0;

  const handlePressBackspace = (e: KeyboardEvent) => {
    if (e.code === "Backspace") {
      sheetStore.removeNote();
    }
    if (e.code === "Space") {
      sheetStore.updateNotes(SPACEBAR);
    }
  };
  const handleSaveButtonClick = (): void => {
    if (!isValid) {
      return;
    }
    sheetStore.saveSheet($sheetStore);
  };
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
    flex-shrink: 0;
    width: 100%;
    height: 72px;
    background-color: $purple100;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $black;
    font-weight: 700;
    font-size: 16px;
    position: relative;

    .button {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }

  .generator-section {
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  .kalimba-section {
    flex: 1 1 auto;
    width: 100%;

    background-color: #e0e9ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<svelte:window on:keydown={handlePressBackspace} />
<main>
  <section class="header">
    <div class="title">칼림바 악보 생성기</div>
    <div class="button">
      <IconButton label="악보집"><Menu /></IconButton>
    </div>
  </section>
  <section class="generator-section">
    <Sheet data={$sheetStore} updateTitle={sheetStore.updateTitle} />
    <section class="kalimba-section">
      <Kalimba scale={$scaleStore} updateNotes={sheetStore.updateNotes} />
      <SaveButton isValid={isValid} handleClick={handleSaveButtonClick} />
    </section>
  </section>
  <Footer />
</main>
