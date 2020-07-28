<template>
  <div class="main-container">
    <basic-settings />
    <answer-sheetedit />
  </div>
</template>

<script>
import BasicSettings from './content/_BasicSettings'
import AnswerSheetedit from './content/_AnswerSheetedit'
export default {
  components: {
    BasicSettings,
    AnswerSheetedit
  },
  data() {
    return {
      currentNode: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.main-container {
  background: $shadow;
}
</style>
