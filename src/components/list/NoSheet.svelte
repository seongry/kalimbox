<script lang="ts">
  import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
</script>

<style>
  .no-sheet {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--colors-purple100);
    border-radius: 0.5rem;
  }

  .icon-box {
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: var(--colors-white);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    text-align: center;
  }

  .text-box {
    padding: 2rem;
  }

  .agree-link {
    text-decoration: none;
  }
  .link-box {
    width: 12rem;
    text-align: center;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--colors-purple500);
    color: var(--colors-white);
    font-size: 1.5rem;
    font-weight: 700;
  }

  h3 {
    text-align: center;
    font-size: 1rem;
  }
  h2 {
    text-align: center;
    font-size: 1.2rem;
  }
</style>

<section class="no-sheet">
  <div class="box">
    <div class="icon-box">
      <Fa icon={faStickyNote} size="6x" color="#8869cf" />
    </div>
    <div class="text-box">
      <h3>악보가 없어요 😢</h3>
      <h2>만들어 볼까요?</h2>
      <a class="agree-link" href=".">
        <div class="link-box">네!</div>
      </a>
    </div>
  </div>
</section>
