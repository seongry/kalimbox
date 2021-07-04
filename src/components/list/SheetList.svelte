<script lang="ts">
  import type { SheetType } from "../../store";
  import NoSheet from "./NoSheet.svelte";
  import Sheet from "./Sheet.svelte";

  export let sheetList: SheetType[];
</script>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;

    max-width: calc(156px * 4 + 144px);
    width: 100%;
  }
  li {
    list-style-type: none;
  }
  li:not(:nth-child(5n + 1)) {
    padding-left: 12px;
  }
  li:nth-child(n + 6) {
    padding-top: 12px;
  }
</style>

{#if sheetList.length === 0}
  <NoSheet />
{/if}
{#if sheetList.length !== 0}
  <ul>
    {#each sheetList as sheet}
      <li>
        <Sheet data={sheet} />
      </li>
    {/each}
  </ul>
{/if}
