<script lang="ts">
  import type { SheetType } from "../../store";
  import Stave from "./Stave.svelte";
  export let data: SheetType;
  export let updateTitle: (e: EventTarget) => void;
  let extendSheet: boolean = false;

  const toggleExtendSheet = () => !extendSheet;
</script>

<style>
  .sheet {
    flex: 1 1 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--colors-white);
    padding-top: 1rem;

    position: relative;
    overflow: overlay;
  }
  .title-box {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
  }
  .title {
    border: none;
    border-bottom: 1px solid var(--colors-gray100);
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    outline: none;
  }
  .title::placeholder {
    color: var(--colors-gray200);
  }
  .stave-box {
    flex: 1 1 auto;
    width: 100%;
    max-width: calc(20 * 1.8rem);
    overflow-x: hidden;
    overflow-y: overlay;
  }

  .extend-button {
    width: 100%;
    background-color: var(--colors-white);
    position: sticky;
    bottom: 0;
    text-align: center;
    padding: 1rem;
  }
</style>

<div class="sheet">
  <div class="title-box">
    <input
      class="title"
      type="input"
      placeholder="악보 제목을 입력해주세요"
      bind:value={data.title}
      on:change={(e) => {
        updateTitle(e.target);
      }}
    />
  </div>
  <div class="stave-box">
    <Stave notes={data.notes} />
  </div>
  <div class="extend-button" on:click={toggleExtendSheet}>확장</div>
</div>
