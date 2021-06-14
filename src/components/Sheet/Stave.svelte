<script lang="ts">
    import type { NotesType } from "../../store";
    import Note from "./Note.svelte";
    export let notes: NotesType[];
  </script>
  
  <style>
    .stave {
      padding: 16px 0;
    }
    .main,
    .sub {
      display: flex;
      align-items: center;
      height: 100%;
      min-height: 68px;
      padding: 8px;
      cursor: pointer;
    }
    .sub:hover {
        border: 1px solid var(--colors-gray200);
        border-radius: 8px;
    }
  </style>
  
  <div class="stave">
    {#each notes as row}
      <div class="row">
        <div class="main">
          {#each row.main as numberCode}
            <Note numberCode={numberCode} />
          {/each}
        </div>
        <div class="sub">
          {#each row.sub as numberCode}
            <Note numberCode={numberCode} />
          {/each}
        </div>
      </div>
    {/each}
  </div>