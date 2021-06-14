<script lang="ts">
    import type { SheetType } from "../../store";
    import Stave from "./Stave.svelte";
    export let data: SheetType;
    export let updateTitle: (e: EventTarget) => void;
  </script>
  
  <style >
    .sheet {
      height: 100%;
      max-height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: var(--colors-white);
      padding: 32px;
    }
    .title-box {
      display: flex;
      justify-content: center;
    }
    .title {
      border: none;
      border-bottom: 1px solid var(--colors-gray100);
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      outline: none;
    }
    .title::placeholder {
        color: var(--colors-gray200);
    }
    .stave-box {
      width: 100%;
      max-width: 720px;
      padding-top: 12px;
      overflow: auto;
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
  