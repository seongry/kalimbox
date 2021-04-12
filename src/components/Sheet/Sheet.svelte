<script lang="ts"></script>

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
    border-bottom: 1px solid $dark_gray;
  }
</style>

<div class="sheet">
  <div class="title-box">
    <input class="title" type="input" placeholder="악보 제목을 입력해주세요" />
  </div>
</div>
