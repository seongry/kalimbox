<script lang="ts">
  import type { NotesType } from "../../store";
  import { sheetStore } from "../../store";
  import Note from "./Note.svelte";
  export let notes: NotesType[];

  const { selectNote, selectedNote } = sheetStore;
</script>

<style>
  .stave {
    padding: 1rem 0;
  }
  .main,
  .sub {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.5rem;
    cursor: pointer;
    margin-left: 0.5rem;
  }
  .main:hover,
  .sub:hover,
  .selected {
    height: 4.5rem;
  }
  .main:hover::before,
  .sub:hover::before,
  .selected::before {
    position: absolute;
    top: 0.5rem;
    left: 0;
    content: "";
    width: 3px;
    background-color: var(--colors-gray100);
    height: 3.5rem;
    border-radius: 0.5rem;
  }

  .selected:hover::before {
    background-color: var(--colors-gray200);
  }

  .selected::before {
    background-color: var(--colors-gray200);
  }
</style>

<div class="stave">
  {#each notes as row, rowIndex}
    <div class="row">
      <div
        class="main"
        class:selected={$selectedNote &&
          $selectedNote.isMain &&
          $selectedNote.row === rowIndex}
        on:click={() => {
          selectNote({
            row: rowIndex,
            index: null,
            isMain: true,
          });
        }}
      >
        {#each row.main as numberCode, mainIndex}
          <Note
            numberCode={numberCode}
            on:click={() => {
              selectNote({
                row: rowIndex,
                index: mainIndex,
                isMain: true,
              });
            }}
            isSelected={$selectedNote &&
              $selectedNote.index === mainIndex &&
              $selectedNote.isMain &&
              $selectedNote.row === rowIndex}
          />
        {/each}
      </div>
      <div
        class="sub"
        class:selected={$selectedNote &&
          !$selectedNote.isMain &&
          $selectedNote.row === rowIndex}
        on:click={() => {
          selectNote({
            row: rowIndex,
            index: null,
            isMain: false,
          });
        }}
      >
        {#each row.sub as numberCode, subIndex}
          <Note
            numberCode={numberCode}
            on:click={() => {
              selectNote({
                row: rowIndex,
                index: subIndex,
                isMain: false,
              });
            }}
            isSelected={$selectedNote &&
              $selectedNote.index === subIndex &&
              !$selectedNote.isMain &&
              $selectedNote.row === rowIndex}
          />
        {/each}
      </div>
    </div>
  {/each}
</div>
