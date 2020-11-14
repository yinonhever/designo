<template>
  <RouterLink class="logo-wrapper" to="/">
    <img class="logo" :src="image" alt="Designo" @click="$emit('clicked')" />
  </RouterLink>
</template>

<script>
export default {
  props: {
    white: Boolean,
  },
  emits: ["clicked"],
  computed: {
    image() {
      if (this.white) return "/assets/shared/desktop/logo-light.png";
      else return "/assets/shared/desktop/logo-dark.png";
    },
  },
};
</script>
