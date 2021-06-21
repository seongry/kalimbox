<script lang="ts">
  import MusicSymbolSvg from "../../asset/music_symbol_icon.svg";
  import type { SheetType } from "../../store";

  export let data: SheetType;
</script>

<style>
  .sheet-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 144px;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--colors-white);
    border-radius: 2px;
    width: 100px;
    height: 124px;
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

<div class="sheet-wrapper">
  <div class="box">
    <MusicSymbolSvg />
  </div>
  <div class="title">{data.title}</div>
</div>
