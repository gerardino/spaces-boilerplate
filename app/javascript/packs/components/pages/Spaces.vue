<template>
  <md-app-content>
    <p v-for="space in spaces" :key="space.id">
      <span>{{ space.name }}</span>
      <router-link :to="{ name: 'space', params: {id: space.id}}">Go</router-link>
    </p>
  </md-app-content>
</template>

<script>
export default {
  computed: {
    spaces() {
      return this.$store.state.spaces.list;
    }
  },
  async mounted() {
    await this.$store.dispatch("spaces/refresh");
  }
};
</script>

<style scoped>
/* .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  } */
</style>
