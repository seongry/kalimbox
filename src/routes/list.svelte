<script lang="ts">
  import { onMount } from "svelte";
  import SheetList from "../components/list/SheetList.svelte";
  import type { SheetType } from "../store";
  let parsedSheetList: SheetType[] = [];

  onMount(async () => {
    parsedSheetList = JSON.parse(localStorage.getItem("__sheetList")) ?? [];
  });
</script>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e0e9ff;
    padding: 56px 0;
  }
</style>

<svelte:head>
  <title>칼림바 악보 생성기 : 리스트</title>
</svelte:head>

<section>
  <SheetList sheetList={parsedSheetList} />
</section>
