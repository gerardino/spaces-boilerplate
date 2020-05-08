<template>
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Everything</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Created by me</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Shared with me</span>
          </md-list-item>

        </md-list>

      </md-app-drawer>

      <md-app-content>
        <p v-for="space in spaces" :key="space.id">
            <span>{{ space.name }}</span>
        </p>
      </md-app-content>
    </md-app>
</template>

<script>

export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  computed: {
    spaces() { return this.$store.state.spaces.list; }
  },
  mounted() {
    this.$store.dispatch('spaces/refresh');
  }
}
</script>

<style scoped>
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
