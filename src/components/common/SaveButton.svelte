<script lang="ts">
  export let isValid: boolean;
  export let handleClick: () => void;
</script>

<style>
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
    background-color: var(--colors-black);
    border-radius: 8px;
    cursor: pointer;
    color: var(--colors-white);
    font-size: 18px;
    font-weight: 500;
    font-family: Roboto;
  }
  .disabled {
    background-color: var(--colors-gray300);
    color: var(--colors-gray200);
    cursor: default;
  }
</style>

<div>
  <div class="save-button" on:click={handleClick} class:disabled={!isValid}>
    save
  </div>
</div>
