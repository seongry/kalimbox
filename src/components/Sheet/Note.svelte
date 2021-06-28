<script lang="ts">
  import { SPACEBAR } from "../../constants/KalimbaKey";
  export let numberCode: string;
</script>

<style>
  .note {
    display: inline-block;
    position: relative;
    padding: 1rem 0.5rem 0 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    border: 1px solid transparent;
    width: 1.8rem;
    height: 3.5rem;
  }
  .note:hover {
    border: 1px solid var(--colors-gray200);
    border-radius: 0.5rem;
  }
  .higher1::before {
    position: absolute;
    left: 10px;
    top: -8px;
    content: ".";
  }
  .higher2::before {
    position: absolute;
    left: 10px;
    top: -8px;
    content: ":";
  }
</style>

<span
  class="note higher{numberCode.length === 3
    ? '2'
    : numberCode.length === 2
    ? '1'
    : ''}"
>
  {numberCode === SPACEBAR ? "" : numberCode.charAt(0)}
</span>
