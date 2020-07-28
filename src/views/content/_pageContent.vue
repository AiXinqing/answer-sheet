<template>
  <div class="container-card">
    <div
      v-for="(index, item) in GroupDataArr"
      :key="index"
      class="page-content"
    >
      <div
        v-for="row in item"
        :key="row.id"
        class="footer"
        :style="{ 'min-height': row.height + 'px' }"
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
    const arr = [
      {
        content: '',
        drag: false,
        height: 382,
        id: 0
      }
    ]
    this.editGroupData(arr)
  },
  methods: {
    ...mapActions('answerSheet', ['editGroupData'])
  }
}
</script>
