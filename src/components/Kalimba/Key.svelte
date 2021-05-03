<script lang="ts">
  import type { KalimbaKeyBarsTypes } from "../../constants/KalimbaKey";
  import type { SheetStoreType } from "../../store";

  export let key: KalimbaKeyBarsTypes;
  export const type: string = "c-key";
  export let onHandleClick: SheetStoreType["updateNotes"];

  // const synth = new Tone.Synth();
  // synth.oscillator.type = "sine";
  // synth.toDestination();
</script>

<style lang="scss">
  @import "../../theme/colors.scss";

  $keyWidth: 36;
  $keyHeight: 240;

  .key {
    width: #{$keyWidth}px;
    min-height: #{$keyHeight}px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    background: linear-gradient(
        180deg,
        $white 0%,
        #dfe6f3 68.75%,
        rgba(160, 177, 209, 0.45) 73.96%,
        $purple100 79%
      ),
      $purple100;
    box-shadow: 1px 4px 8px rgba(50, 45, 68, 0.25);

    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;

    font-weight: bold;

    padding-bottom: 12px;
    position: relative;

    cursor: pointer;
    user-select: none;

    &:hover {
      background: linear-gradient(
          180deg,
          $white 0%,
          #dfe6f3 68.75%,
          rgba(160, 177, 209, 0.45) 73.96%,
          $purple100 79%,
          rgba(160, 177, 209, 0.5) 100%
        ),
        $purple100;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
      background: linear-gradient(
          180deg,
          $white 0%,
          #dfe6f3 68.75%,
          rgba(160, 177, 209, 0.45) 73.96%,
          $purple100 79%,
          rgba(160, 177, 209, 0.9) 100%
        ),
        $purple100;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    }

    &:not(:first-child) {
      margin-left: 8px;
    }

    $increase: 20;
    &.c-key {
      $helf: 9;
      @for $index from 1 through 17 {
        &:nth-child(#{$index }) {
          /* @if ($index < $helf + 1) {
            height: #{($index - 1) * $increase + $keyHeight}px;
          } @else {
            height: #{$keyHeight +
              ($increase * $helf) -
              $increase *
              ($index + 1 - $helf)}px;
          } */

          @if ($index < $helf + 1) {
            top: #{-180 + ($index * $increase)}px;
          } @else {
            top: #{-180 - $increase * ($index - 2 * $helf)}px;
          }
        }
      }
    }
  }

  @mixin octave {
    position: absolute;
    bottom: 62px;
    width: #{$keyWidth}px;
    left: 0;
    text-align: center;
  }

  .codeName {
    color: $purple400;
    &.piano {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 24px;
      height: 24px;
      border: 1px solid $purple400;
      border-radius: 50%;
      margin-top: 6px;

      background-color: $purple400;
      color: $white;
    }
  }

  .higher {
    &1 {
      &:before {
        @include octave;
        content: ".";
      }
    }

    &2 {
      &:before {
        @include octave;
        content: ":";
      }
    }
  }
</style>

<div
  class="key {type}"
  on:mousedown={() => {
    // synth.triggerAttack(key.code);
  }}
  on:mouseup={() => {
    onHandleClick(key);
    // synth.triggerRelease();
  }}
>
  <span class="codeName higher{key.higher}">{key.number}</span>
  <span class="codeName piano">{key.code}</span>
</div>
