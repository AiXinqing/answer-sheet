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
        :style="{ minHeight: row.castHeight + 'px' }"
      >
        <component :is="row.questionType" :content-data="row.content" />
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
      { id: 1, height: 380, questionType: 'AnswerSheetTitle', content: [{}] },
      { id: 2, height: 120, questionType: 'ObjectiveQuestion', content: [] },
      { id: 3, height: 90, questionType: '', content: [] },
      { id: 4, height: 900, questionType: '', content: [] },
      { id: 5, height: 350, questionType: '', content: [] }
    ]
    this.groupPage(TestData)
  },
  methods: {
    ...mapActions('answerSheet', ['editGroupData', 'groupPage', 'editLayout'])
  }
}
</script>
