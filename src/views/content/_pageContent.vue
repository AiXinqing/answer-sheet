<template>
  <div class="container-card">
    <div v-for="(item, i) in GroupDataArr" :key="i" class="page-content">
      <div
        v-for="(row, a) in item"
        :key="a"
        class="footer"
        :style="{ height: row.castHeight + 'px' }"
      >
        {{ row.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('answerSheet', ['GroupDataArr'])
  },
  mounted() {
    const TestData = [
      { id: 1, height: 200 },
      { id: 2, height: 120 },
      { id: 3, height: 90 },
      { id: 4, height: 900 },
      { id: 5, height: 350 }
    ]
    this.groupPage(TestData)
  },
  methods: {
    ...mapActions('answerSheet', ['editGroupData', 'groupPage'])
  }
}
</script>
