<script lang="ts">
  import Footer from "../components/common/Footer.svelte";
  import Kalimba from "../components/common/icon/Kalimba.svelte";
  import IconButton from "../components/common/IconButton.svelte";
</script>

<style lang="scss">
  @import "../theme/colors.scss";

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
    background-color: $purple100;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $black;
    font-weight: 700;
    font-size: 16px;
    position: relative;

    .button {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
</style>

<main>
  <section class="header">
    <div class="title">칼림바 악보 생성기</div>
    <div class="button">
      <IconButton label="만들기"><Kalimba /></IconButton>
    </div>
  </section>
  <section />
  <Footer />
</main>
