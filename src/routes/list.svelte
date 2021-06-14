<script lang="ts">
    import Footer from "../components/common/Footer.svelte";
    import KalimbaIcon from "../components/common/icon/KalimbaIcon.svelte";
  import IconButton from "../components/common/IconButton.svelte";
  </script>
  
  <style>
    main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .header {
      flex-shrink: 0;
      width: 100%;
      height: 72px;
      background-color: var(--colors-purple100);
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--colors-black);
      font-weight: 700;
      font-size: 16px;
      position: relative;
    }
    .header > .button {
        position: absolute;
        top: 16px;
        right: 16px;
    }
  </style>
  
  <main>
    <section class="header">
      <div class="title">칼림바 악보 생성기</div>
      <div class="button">
        <IconButton label="만들기"><KalimbaIcon /></IconButton>
      </div>
    </section>
    <section />
  </main>