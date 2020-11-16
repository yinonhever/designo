<template>
  <main :class="classes">
    <slot />
    <CTA v-if="showCTA" />
  </main>
</template>

<script>
import CTA from "./CTA";

export default {
  components: { CTA },
  props: ["title"],
  computed: {
    classes() {
      return this.title === "Contact"
        ? "page page--contact"
        : this.title === "About"
        ? "page page--about"
        : "page";
    },
    showCTA() {
      return this.title !== "Contact";
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    document.title = this.title ? `${this.title} – Designo` : "Designo";
  },
};
</script>
