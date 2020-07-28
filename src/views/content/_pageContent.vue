<template>
  <div class="container-card">
    <div v-for="(item, i) in GroupDataArr" :key="i" class="page-content">
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
import AnswerSheetTitle from './_AnswerSheetTitle'

export default {
  components: {
    AnswerSheetTitle
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('answerSheet', ['GroupDataArr'])
  },
  mounted() {
    const TestData = [
      { id: 1, height: 200, questionType: 'AnswerSheetTitle', content: [] },
      { id: 2, height: 120, questionType: '' },
      { id: 3, height: 90, questionType: '' },
      { id: 4, height: 900, questionType: '' },
      { id: 5, height: 350, questionType: '' }
    ]
    this.groupPage(TestData)
  },
  methods: {
    ...mapActions('answerSheet', ['editGroupData', 'groupPage'])
  }
}
</script>
