<script lang="ts">
  export let numberCode: string;
</script>

<style lang="scss">
  @import "../../theme/colors.scss";

  .note {
    display: inline-block;
    position: relative;
    padding: 16px 8px 0 8px;
    font-size: 20px;
    font-weight: 700;

    &:hover {
      border: 1px solid $gray200;
      border-radius: 8px;
    }
  }

  @mixin octave {
    position: absolute;
    left: 10px;
    top: -8px;
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

<span
  class="note higher{numberCode.length === 3
    ? '2'
    : numberCode.length === 2
    ? '1'
    : ''}"
>
  {numberCode !== "_" && numberCode.charAt(0)}
</span>
