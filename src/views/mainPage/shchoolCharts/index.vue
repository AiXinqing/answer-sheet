<template>
  <component
    :is="chartsComponet"
  />

</template>

<script>

import studentPop from './_studentPop'
import FacultyPop from './_FacultyPop'
import studentAttendance from './_studentAttendance'
import stuCardAttendance from './_stuCardAttendance'
import morningCheck from './_morningCheck'
import morningResult from './_morningResult'

export default {
  components: {
    studentPop,
    FacultyPop,
    studentAttendance,
    stuCardAttendance,
    morningCheck,
    morningResult
  },
  computed: {
    attributeId() {
      return this.$route.query.attributeId
    },
    objectId() {
      return this.$route.params.objectId
    },
    chartsComponet() {
      const attrId = parseInt(this.attributeId)
      switch (attrId) {
        case 6:
          return studentPop
        case 7:
          return FacultyPop
        case 8:
          return studentAttendance
        case 9:
          return stuCardAttendance
        case 18:
          return morningCheck
        case 19:
          return morningResult
        default:
          return null
      }
    }
  }
}
</script>

