<script lang="ts">
  export let isValid: boolean;
  export let handleClick: () => void;
</script>

<style lang="scss">
  @import "../theme/colors.scss";

  div {
    flex: 1;
    margin: 20px 0;
  }
  .save-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 40px;
    background-color: $black;
    border-radius: 8px;
    cursor: pointer;
    color: $white;
    font-size: 18px;
    font-weight: 500;
    font-family: Roboto;

    &.disabled {
      background-color: $gray300;
      color: $gray200;
      cursor: not-allowed;
    }
  }
</style>

<div>
  <div
    class="save-button"
    on:click={handleClick}
    class:disabled={!isValid}
    disabled={!isValid}
  >
    save
  </div>
</div>
