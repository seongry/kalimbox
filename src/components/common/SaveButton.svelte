<script lang="ts">
  import { sheetStore } from "../../store";

  const { isValid, sheetInfo, saveSheet } = sheetStore;
  const handleOnClick = (): void => {
    if (!$isValid) {
      return;
    }
    saveSheet($sheetInfo);
  };
</script>

<style>
  .button-wrapper {
    flex: 0;
    display: flex;
    align-items: flex-end;
    margin-bottom: 1.5rem;
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

<div class="button-wrapper">
  <div class="save-button" on:click={handleOnClick} class:disabled={!$isValid}>
    save
  </div>
</div>
