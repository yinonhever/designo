<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    narrow: Boolean,
    colored: Boolean,
  },
  computed: {
    classes() {
      let classes = "button";
      if (this.narrow) classes += " button--narrow";
      if (this.colored) classes += " button--colored";
      return classes;
    },
  },
};
</script>
