<script lang="ts">
  export let label: string;
  export let handleClick: null | (() => void) = null;
</script>

<style lang="scss">
  .button {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .label {
    font-size: 12px;
  }
</style>

<div class="button" on:click={handleClick}>
  <slot />
  <span class="label">
    {label}
  </span>
</div>
