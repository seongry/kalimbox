<script lang="ts">
  import type { ScaleType } from "../../constants/KalimbaKey";
  import { SPACEBAR } from "../../constants/KalimbaKey";
  import type { SheetStoreType } from "../../store";
  import { sheetStore } from "../../store";
  import Key from "./Key.svelte";

  export let scale: ScaleType;

  const { selectedNote, updateNotes, insertSelectedNote } = sheetStore;

  const scrollToBottom = (): void => {
    const staveBoxElement = document.getElementById("stave-box");
    setTimeout(() => {
      if (staveBoxElement) {
        staveBoxElement.scroll({
          top: staveBoxElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 0);
  };
  const handleKeyClick: SheetStoreType["updateNotes"] = (codeInfo) => {
    if ($selectedNote.index) {
      if (codeInfo !== SPACEBAR) {
        insertSelectedNote({
          codeInfo: codeInfo,
          selectedNote: $selectedNote,
        });
      }
    } else {
      updateNotes(codeInfo);
      scrollToBottom();
    }
  };
</script>

<style>
  .kalimba {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .keys {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    padding-bottom: 1.5rem;
  }
  .vibrating-bar {
    position: absolute;
    top: 1.5rem;
    width: 820px;
    height: 25px;
    border-radius: 20px;
    background-color: var(--colors-purple300);
    box-shadow: 1px 4px 4px rgba(6, 16, 41, 0.13);
  }
</style>

<div class="kalimba">
  <div class="vibrating-bar {scale.type}" />
  <div class="keys">
    {#each scale.keys as keyBar}
      <Key key={keyBar} onHandleClick={handleKeyClick} />
    {/each}
  </div>
</div>
