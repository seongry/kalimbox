<script lang="ts">
    import { onMount } from "svelte";
    import type { KalimbaKeyBarsTypes } from "../../constants/KalimbaKey";
    import type { SheetStoreType } from "../../store";
    export let key: KalimbaKeyBarsTypes;
    export const type: string = "c-key";
    export let onHandleClick: SheetStoreType["updateNotes"];
    let synth = undefined;

    onMount(async () => {
        const tone = await import("tone");

        synth = new tone.Synth();
        synth.oscillator.type = "sine";
        synth.toDestination();
    });
  </script>
  
  <style>
    :root {
        --keyWidth: 36px;
        --keyHeight: 240px;

        --increase: 20px;
        --helf: 9;
    }
    .key {
      width: var(--keyWidth);
      min-height: var(--keyHeight);
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      background: linear-gradient(
          180deg,
          var(--colors-white) 0%,
          #dfe6f3 68.75%,
          rgba(160, 177, 209, 0.45) 73.96%,
          var(--colors-purple100) 79%
        ),
        var(--colors-purple100);
      box-shadow: 1px 4px 8px rgba(50, 45, 68, 0.25);
      border-bottom-left-radius: 18px;
      border-bottom-right-radius: 18px;
      font-weight: bold;
      padding-bottom: 12px;
      position: relative;
      cursor: pointer;
      user-select: none;
    }
    .key:hover {
        background: linear-gradient(
            180deg,
            var(--colors-white) 0%,
            #dfe6f3 68.75%,
            rgba(160, 177, 209, 0.45) 73.96%,
            var(--colors-purple100) 79%,
            rgba(160, 177, 209, 0.5) 100%
          ),
          var(--colors-purple100);
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }
    .key:active {
        background: linear-gradient(
            180deg,
            var(--colors-white) 0%,
            #dfe6f3 68.75%,
            rgba(160, 177, 209, 0.45) 73.96%,
            var(--colors-purple100) 79%,
            rgba(160, 177, 209, 0.9) 100%
          ),
          var(--colors-purple100);
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    }
    .key:not(:first-child) {
        margin-left: 8px;
    }
    
    .key:nth-child(1){
        top: calc(-180px + 1 * var(--increase));
    }
    .key:nth-child(2){
        top: calc(-180px + 2 * var(--increase));
    }
    .key:nth-child(3){
        top: calc(-180px + 3 * var(--increase));
    }
    .key:nth-child(4){
        top: calc(-180px + 4 * var(--increase));
    }
    .key:nth-child(5){
        top: calc(-180px + 5 * var(--increase));
    }
    .key:nth-child(6){
        top: calc(-180px + 6 * var(--increase));
    }
    .key:nth-child(7){
        top: calc(-180px + 7 * var(--increase));
    }
    .key:nth-child(8){
        top: calc(-180px + 8 * var(--increase));
    }
    .key:nth-child(9){
        top: calc(-180px + 9 * var(--increase));
    }
    .key:nth-child(10){
        top: calc(-180px - var(--increase) * (10 - 2*var(--helf)));
    }
    .key:nth-child(11){
        top: calc(-180px - var(--increase) * (11 - 2*var(--helf)));
    }
    .key:nth-child(12){
        top: calc(-180px - var(--increase) * (12 - 2*var(--helf)));
    }

    .key:nth-child(13){
        top: calc(-180px - var(--increase) * (13 - 2*var(--helf)));
    }
    .key:nth-child(14){
        top: calc(-180px - var(--increase) * (14 - 2*var(--helf)));
    }
    .key:nth-child(15){
        top: calc(-180px - var(--increase) * (15 - 2*var(--helf)));
    }
    .key:nth-child(16){
        top: calc(-180px - var(--increase) * (16 - 2*var(--helf)));
    }
    .key:nth-child(17){
        top: calc(-180px - var(--increase) * (17 - 2*var(--helf)));
    }
    
    .codeName {
      color: var(--colors-purple400);
    }
    .codeName.piano {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border: 1px solid var(--colors-purple400);
        border-radius: 50%;
        margin-top: 6px;
        background-color: var(--colors-purple400);
        color: var(--colors-white);
    }
    .higher1::before {
            position: absolute;
            bottom: 62px;
            width: var(--keyWidth);
            left: 0;
            text-align: center;
          content: ".";
    }
    .higher2::before {
            position: absolute;
            bottom: 62px;
            width: var(--keyWidth);
            left: 0;
            text-align: center;
          content: ":";
    }
  </style>
  
  <div
    class="key {type}"
    on:mousedown={() => {
      synth.triggerAttack(key.code);
    }}
    on:mouseup={() => {
      onHandleClick(key);
      synth.triggerRelease();
    }}
  >
    <span class="codeName higher{key.higher}">{key.number}</span>
    <span class="codeName piano">{key.code}</span>
  </div>