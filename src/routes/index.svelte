<script context="module">
  export async function preload(page, _) {
    const { id } = page.query;

    return { id };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import SaveButton from "../components/common/SaveButton.svelte";
  import Kalimba from "../components/Kalimba/Kalimba.svelte";
  import Sheet from "../components/Sheet/Sheet.svelte";
  import { SPACEBAR } from "../constants/KalimbaKey";
  import type { SheetType } from "../store";
  import { createScale, createSheet } from "../store";

  export let id: string;

  const sheetStore = createSheet();
  const scaleStore = createScale();

  $: isValid = !!$sheetStore.title && $sheetStore.notes.length > 0;

  onMount(() => {
    if (id) {
      const parsedSheetList: SheetType[] =
        JSON.parse(localStorage.getItem("__sheetList")) ?? [];
      const selectedSheetInfo = parsedSheetList.find((item) => item.id === id);

      sheetStore.update(() => selectedSheetInfo);
    }
  });

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
  .generator-section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .kalimba-section {
    width: 100%;
    background-color: #e0e9ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<svelte:head>
  <title>칼림바 악보 생성기</title>
</svelte:head>

<svelte:window on:keydown={handlePressBackspace} />
<section class="generator-section">
  <Sheet data={$sheetStore} updateTitle={sheetStore.updateTitle} />
  <section class="kalimba-section">
    <Kalimba scale={$scaleStore} updateNotes={sheetStore.updateNotes} />
    <SaveButton isValid={isValid} handleClick={handleSaveButtonClick} />
  </section>
</section>
