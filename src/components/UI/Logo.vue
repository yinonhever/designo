<template>
  <a class="logo-wrapper" href="/">
    <img class="logo" :src="image" alt="Designo" />
  </a>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    image() {
      if (this.white) return "/assets/shared/desktop/logo-light.png";
      else return "/assets/shared/desktop/logo-dark.png";
    },
  },
};
</script>
