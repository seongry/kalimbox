<script lang="ts">
  export let notes: string[];
</script>

<style lang="scss">
  .stave {
  }
</style>

<div class="stave">
  {#each notes as note}
    {note}
  {/each}
</div>
