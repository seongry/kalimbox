<script lang="ts">
  import * as Tone from "tone";
  import type { KalimbaKeyBarsTypes } from "../../constants/KalimbaKey";

  export let key: KalimbaKeyBarsTypes;
  export const type: string = "c-key";
  export let onHandleClick: (note: string) => void;

  const synth = new Tone.Synth();
  synth.oscillator.type = "sine";
  synth.toMaster();
</script>

<style lang="scss">
  @import "../../theme/colors.scss";

  $keyWidth: 36;
  $keyHeight: 240;

  .Key {
    width: #{$keyWidth}px;
    min-height: #{$keyHeight}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    background: linear-gradient(to right, $purple200, $white);
    box-shadow: inset 0px -4px 7px $dark_gray;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;

    font-weight: bold;

    padding-bottom: 12px;
    position: relative;

    cursor: pointer;

    &:hover {
      background: linear-gradient(#eeeeee, #b7b7b7);
      box-shadow: 0px 7px 7px darken($dark_gray, 20%);
      color: $black;
    }

    &:not(:first-child) {
      margin-left: 8px;
    }

    $increase: 20;
    &.c-key {
      $helf: 9;
      @for $index from 1 through 17 {
        &:nth-child(#{$index }) {
          @if ($index < $helf + 1) {
            height: #{($index - 1) * $increase + $keyHeight}px;
          } @else {
            height: #{$keyHeight +
              ($increase * $helf) -
              $increase *
              ($index + 1 - $helf)}px;
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
  class="Key {type}"
  on:mousedown={() => {
    synth.triggerAttack(key.code);
  }}
  on:mouseup={() => {
    onHandleClick(key.code);
    synth.triggerRelease();
  }}
>
  <span class="codeName higher{key.higher}">{key.number}</span>
  <span class="codeName piano">{key.code}</span>
</div>
