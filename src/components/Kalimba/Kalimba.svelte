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

    height: 20px;
    border-radius: 20px;
    background-color: $purple300;
    box-shadow: 1px 4px 4px rgba(6, 16, 41, 0.13);

    &.c-key {
      width: #{(17 * 36) + (16 * 8) + 80}px;
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
