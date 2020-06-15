<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">My Title</span>
    </md-app-toolbar>

    <md-app-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text" @click="everything()">Everything</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text" @click="mine()">Created by me</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text" @click="shared()">Shared with me</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  methods: {
    everything() {
      this.$router.push({ name: "spaces" });
    },
    mine() {
      this.$router.push({ name: "spaces" });
    },
    shared() {
      this.$router.push({ name: "spaces" });
    }
  },
  created() {
    this.$store.dispatch("auth/loadCredentials");
  }
};
</script>

<style scoped>
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
