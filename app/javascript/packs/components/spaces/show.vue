<template>
  <md-app-content>
    <h1>Welcome to {{ space.name }}</h1>
  </md-app-content>
</template>

<script>
export default {
  computed: {
    space() {
      return this.$store.state.space.current;
    }
  },
  mounted() {
    this.$store.dispatch("space/get", { id: 1 });
  }
};
</script>

<style scoped>
/* .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  } */
</style>
