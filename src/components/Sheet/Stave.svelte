<script lang="ts">
  import type { NotesType } from "../../store";

  export let notes: NotesType;
</script>

<style lang="scss">
</style>

<div>
  {#each notes.main as note}
    {note}
  {/each}
  {#each notes.sub as note}
    {note}
  {/each}
</div>
