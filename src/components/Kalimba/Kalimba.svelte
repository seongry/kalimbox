<script lang="ts">
  import { C_KEY } from "../../constants/KalimbaKey";
  import Key from "./Key.svelte";

  let kalimbaKeys = C_KEY;
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
  }

  .vibrating-bar {
    position: absolute;
    top: 40px;

    height: 12px;
    border-radius: 12px;
    background-color: $white;
    opacity: 0.34;

    &.c-key {
      width: #{(17 * 36) + (16 * 12) + 36}px;
    }
  }
</style>

<div class="kalimba">
  <div class="vibrating-bar {kalimbaKeys === C_KEY && 'c-key'}"></div>
  <div class="keys">
    {#each kalimbaKeys as keyBar}
      <Key key="{keyBar}" />
    {/each}
  </div>
</div>
