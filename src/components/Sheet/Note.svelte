<script lang="ts">
    import { SPACEBAR } from "../../constants/KalimbaKey";
    export let numberCode: string;
  </script>
  
  <style>
    .note {
      display: inline-block;
      position: relative;
      padding: 16px 8px 0 8px;
      font-size: 20px;
      font-weight: 700;
    }
    .note:hover {
        border: 1px solid var(--colors-gray200);
        border-radius: 8px;
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