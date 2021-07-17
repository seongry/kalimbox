<script lang="ts">
  import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { sheetStore } from "../../store";
  import Stave from "./Stave.svelte";

  export let isExtend: boolean;
  export let toggleIsExtend: () => void;

  const { sheetInfo, updateTitle } = sheetStore;
</script>

<style>
  .sheet {
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    max-height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--colors-white);
    padding-top: 1rem;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    overflow: overlay;

    transition: max-height 0.25s ease-in;

    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    box-shadow: 1px 4px 8px rgb(6 16 41 / 13%);
  }
  .sheet.extend {
    width: 100%;
    height: 100%;
    max-height: 85%;

    transition: max-height 0.25s ease-out;
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
  #stave-box {
    flex: 1 1 auto;
    width: 100%;
    max-width: calc(21 * 1.8rem);
    margin-left: 1.8rem;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  #stave-box:hover {
    overflow-y: overlay;
  }
  #stave-box::-webkit-scrollbar {
    width: 6px;
  }
  #stave-box::-webkit-scrollbar-track {
    background-color: transparent;
  }
  #stave-box::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: var(--colors-gray300);
  }
  #stave-box::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  .extend-button-section {
    width: 100%;
    background-color: var(--colors-white);
    position: sticky;
    bottom: 0;
    text-align: center;
    padding: 1rem;
  }

  .extend-button {
    width: 6rem;
    font-size: 2rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    background-color: var(--colors-white);
    cursor: pointer;
  }
  .extend-button:active {
    background-color: var(--colors-white);
  }
</style>

<div class="sheet" class:extend={isExtend}>
  <div class="title-box">
    <input
      class="title"
      type="input"
      placeholder="악보 제목을 입력해주세요"
      bind:value={$sheetInfo.title}
      on:change={(e) => {
        updateTitle(e.target);
      }}
    />
  </div>
  <div id="stave-box">
    <Stave notes={$sheetInfo.notes} />
  </div>
  <div class="extend-button-section">
    <button class="extend-button" on:click={toggleIsExtend}>
      <Fa icon={faAngleDown} />
    </button>
  </div>
</div>
