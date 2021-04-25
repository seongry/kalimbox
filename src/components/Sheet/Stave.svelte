<script lang="ts">
  import type { NotesType } from "../../store";
  import Note from "./Note.svelte";

  export let notes: NotesType;
</script>

<style lang="scss">
  .stave {
    padding: 16px 0;
  }
</style>

<div class="stave">
  <div class="main">
    {#each notes.main as numberCode}
      <Note numberCode={numberCode} />
    {/each}
  </div>
  <div class="sub">
    {#each notes.sub as numberCode}
      <Note numberCode={numberCode} />
    {/each}
  </div>
</div>
