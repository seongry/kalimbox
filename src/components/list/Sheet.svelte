<script lang="ts">
  import { goto } from "@sapper/app";
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
  <div class="box">
    <MusicSymbolSvg />
  </div>
  <div class="title">{data.title}</div>
</div>
