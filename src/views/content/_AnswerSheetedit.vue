<template>
  <!-- 答题卡内容编辑 -->
  <div class="main-info">
    <page-content />
    <answer-question />
  </div>
</template>

<script>
import AnswerQuestion from './_AnwerQuestion'
import PageContent from './_pageContent'
export default {
  components: {
    AnswerQuestion,
    PageContent
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '~@/styles/variables.scss';
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
  width: 785px;
  height: 1170px;
  border: 1px solid $font-333;
  overflow: hidden;
  background: $white;
  border-radius: 3px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  .footer {
    position: relative;
    padding-top: 20px;
    width: calc(100% - 40px);
    left: 20px;
  }
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
