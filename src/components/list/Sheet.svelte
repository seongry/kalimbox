<script lang="ts">
  import { faTimes } from "@fortawesome/free-solid-svg-icons";
  import { goto } from "@sapper/app";
  import Fa from "svelte-fa";
  import MusicSymbolSvg from "../../asset/music_symbol_icon.svg";
  import type { SheetType } from "../../store";

  export let data: SheetType;

  const handleClick = async () => {
    await goto(`/kalimba-sheet-generator/?id=${data.id}`);
  };
</script>

<style>
  .sheet-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 144px;

    cursor: pointer;
    position: relative;
  }

  .delete-button {
    position: absolute;
    top: -6px;
    right: 16px;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--colors-white);
    border-radius: 2px;
    width: 100px;
    height: 124px;
    box-shadow: 5px 5px 10px var(--colors-purple300);
  }
  .title {
    padding-top: 12px;
    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
  }
</style>

<div class="sheet-wrapper" on:click={handleClick}>
  <span class="delete-button">
    <Fa icon={faTimes} size="lg" color="#c6c6c6" />
  </span>
  <div class="box">
    <MusicSymbolSvg />
  </div>
  <div class="title">{data.title}</div>
</div>
