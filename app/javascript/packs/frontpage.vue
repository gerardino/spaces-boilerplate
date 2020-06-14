<template>
  <div>
    <md-toolbar class="md-large md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start"></div>

        <div class="md-toolbar-section-end">
          <md-button @click="login" class="md-button">Sign in</md-button>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset">
        <h3 class="md-title">Spaces</h3>
      </div>
    </md-toolbar>
    <div class="content">
      <h2>Welcome!</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      window.location.href = `/auth/google_oauth2?auth_origin_url=${window.location.protocol}//${window.location.host}/app`;
    }
  }
};
</script>

<style scoped>
.md-app {
  /* max-height: 400px; */
  border: 1px solid rgba(#000, 0.12);
}

.md-app-toolbar {
  height: 196px;
  width: 100%;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
