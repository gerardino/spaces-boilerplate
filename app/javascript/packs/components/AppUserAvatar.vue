<template>
  <div class="user">
    <md-avatar class="md-large" :class="{'md-primary md-avatar-icon': !showImage}">
      <img v-if="showImage" :src="user.image" :alt="user.name" @error="imageBroken" />
      <md-ripple v-else>{{ user.initials }}</md-ripple>
    </md-avatar>
    <div class="md-title">{{ user.name }}</div>
    <div class="md-subheading">{{ user.email }}</div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data: function() {
    return {
      showImage: this.user.image !== undefined
    };
  },
  methods: {
    imageBroken() {
      this.showImage = false;
    }
  }
};
</script>

<style scoped lang="scss">
.user {
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  margin-top: 1em;
  width: 100%;
  align-items: center;
}
</style>
