<template>
  <!-- 答题卡内容编辑 -->
  <div class="main-info">
    <div class="container-card">
      <div class="page-content" />
    </div>
    <answer-question />
  </div>
</template>

<script>
import AnswerQuestion from "./_AnwerQuestion";
export default {
  components: {
    AnswerQuestion,
  },
  data() {
    return {
      da: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.main-info {
  height: 100%;
  padding-top: 50px;
  position: absolute;
  top: 0;
  width: 100%;
}
.container-card {
  position: relative;
  padding-top: 30px;
  width: calc(100% - 330px);
  height: calc(100% - 20px);
  overflow: auto;
  float: left;
}
.page-content {
  width: 740px;
  height: 1170px;
  border: 1px solid $font-333;
  overflow: hidden;
  background: $white;
  border-radius: 3px;
  padding: 0 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  .footer {
    position: relative;
    padding-top: 20px;
  }
}
</style>
