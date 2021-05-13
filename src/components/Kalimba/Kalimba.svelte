<script lang="ts">
  import type { ScaleType } from "../../constants/KalimbaKey";
  import type { SheetStoreType } from "../../store";
  import Key from "./Key.svelte";

  export let updateNotes: SheetStoreType["updateNotes"];
  export let scale: ScaleType;
</script>

<style lang="scss">
  @import "../../theme/colors.scss";
  .kalimba {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .keys {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    padding-bottom: 12px;
  }

  .vibrating-bar {
    position: absolute;
    top: 40px;

    height: 25px;
    border-radius: 20px;
    background-color: $purple300;
    box-shadow: 1px 4px 4px rgba(6, 16, 41, 0.13);

    &.C_KEY {
      width: #{(17 * 36) + (16 * 8) + 80}px;
    }
  }
</style>

<div class="kalimba">
  <div class="vibrating-bar {scale.type}" />
  <div class="keys">
    {#each scale.keys as keyBar}
      <Key key={keyBar} onHandleClick={updateNotes} />
    {/each}
  </div>
</div>
