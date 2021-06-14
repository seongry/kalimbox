<script lang="ts">
	import MenuIcon from "../components/common/icon/MenuIcon.svelte";
	import IconButton from "../components/common/IconButton.svelte";
	import SaveButton from "../components/common/SaveButton.svelte";
	import Kalimba from "../components/Kalimba/Kalimba.svelte";
	import Sheet from "../components/Sheet/Sheet.svelte";
	import { SPACEBAR } from "../constants/KalimbaKey";
	import type { SheetType } from "../store";
	import { createScale,createSheet } from "../store";

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

<style>
  .header {
    flex-shrink: 0;
    width: 100%;
    height: 72px;
    background-color: var(--colors-purple100);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--colors-black);
    font-weight: 700;
    font-size: 16px;
    position: relative;
  }
  .header .button {
      position: absolute;
      top: 16px;
      right: 16px;
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

<svelte:head>
	<title>칼림바 생성기</title>
</svelte:head>

<svelte:window on:keydown={handlePressBackspace} />
<section class="header">
    <div class="title">칼림바 악보 생성기</div>
    <div class="button">
      <IconButton label="악보집"><MenuIcon /></IconButton>
    </div>
  </section>
  <section class="generator-section">
     <Sheet data={$sheetStore} updateTitle={sheetStore.updateTitle} />
    <section class="kalimba-section">
      <Kalimba scale={$scaleStore} updateNotes={sheetStore.updateNotes} />
      <SaveButton isValid={isValid} handleClick={handleSaveButtonClick} />
    </section> 
  </section>