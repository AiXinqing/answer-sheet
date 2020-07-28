<template>
  <div class="container-card">
    <div
      v-for="(item, i) in GroupDataArr"
      :key="i"
      class="page-content"
      :style="{ width: PageLayout.pageWidth + 'px' }"
    >
      <div
        v-for="(row, a) in item"
        :key="a"
        class="footer"
        :style="{ height: row.castHeight + 'px' }"
      >
        <component :is="row.questionType" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AnswerSheetTitle from './_AnswerSheetTitle' // 答题卡标题
import ObjectiveQuestion from './_ObjectiveQuestion' // 客观题

export default {
  components: {
    AnswerSheetTitle,
    ObjectiveQuestion
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('answerSheet', ['GroupDataArr', 'PageLayout'])
  },
  mounted() {
    const TestData = [
      { id: 1, height: 200, questionType: 'AnswerSheetTitle', content: [] },
      { id: 2, height: 120, questionType: 'ObjectiveQuestion' },
      { id: 3, height: 90, questionType: '' },
      { id: 4, height: 900, questionType: '' },
      { id: 5, height: 350, questionType: '' }
    ]
    this.groupPage(TestData)
  },
  methods: {
    ...mapActions('answerSheet', ['editGroupData', 'groupPage', 'editLayout'])
  }
}
</script>
