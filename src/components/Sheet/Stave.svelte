<script lang="ts">
  export let notes: string[];
</script>

<style lang="scss">
</style>

<div>
  {#each notes as note}
    {note}
  {/each}
</div>
