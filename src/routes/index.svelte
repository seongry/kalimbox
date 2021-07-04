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
  import { createOption, sheetStore } from "../store";

  export let id: string;

  const optionStore = createOption();

  const { setSheetInfoById, removeNote, updateNotes } = sheetStore;

  onMount(() => {
    if (id) {
      const parsedSheetList: SheetType[] =
        JSON.parse(localStorage.getItem("__sheetList")) ?? [];
      const fetchedData = parsedSheetList.find((item) => item.id === id);

      setSheetInfoById(fetchedData);
    }
  });

  const handlePressBackspace = (e: KeyboardEvent) => {
    if (e.code === "Backspace") {
      removeNote();
    }
    if (e.code === "Space") {
      updateNotes(SPACEBAR);
    }
  };
  const toggleIsExtend = (): void => {
    optionStore.updateOption({
      name: "isExtend",
      value: !$optionStore.isExtend,
    });
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

    position: relative;
    justify-content: flex-end;
  }
  .kalimba-section {
    width: 100%;
    height: 60%;
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
  <Sheet isExtend={$optionStore.isExtend} toggleIsExtend={toggleIsExtend} />
  <section class="kalimba-section">
    <Kalimba scale={$optionStore.scale} />
    <SaveButton />
  </section>
</section>
