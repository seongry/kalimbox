<script lang="ts">
  import type { SheetType } from "../../store";
  import Stave from "./Stave.svelte";

  export let data: SheetType;
  export let updateTitle: (e: EventTarget) => void;
</script>

<style lang="scss">
  @import "../../theme/colors.scss";

  .sheet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $white;
    padding: 32px;
  }

  .title-box {
    display: flex;
    justify-content: center;
  }

  .title {
    border: none;
    border-bottom: 1px solid $gray100;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    outline: none;
    &::placeholder {
      color: $gray200;
    }
  }

  .stave-box {
    padding-top: 12px;
  }
</style>

<div class="sheet">
  <div class="title-box">
    <input
      class="title"
      type="input"
      placeholder="악보 제목을 입력해주세요"
      bind:value={data.title}
      on:change={(e) => {
        updateTitle(e.target);
      }}
    />
  </div>
  <div class="stave-box">
    <Stave notes={data.notes} />
  </div>
</div>
