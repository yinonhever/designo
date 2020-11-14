<template>
  <main class="page">
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
