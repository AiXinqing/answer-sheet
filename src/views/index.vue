<template>
  <div class="main-container">
    <basic-settings />
  </div>
</template>

<script>
import BasicSettings from "./content/_BasicSettings";
export default {
  components: {
    BasicSettings,
  },
  data() {
    return {
      currentNode: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.main-container {
  background: $shadow;
}
</style>
