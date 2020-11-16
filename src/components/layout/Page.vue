<template>
  <main class="page" :id="id">
    <slot />
    <CTA v-if="showCTA" />
  </main>
</template>

<script>
import CTA from "./CTA";

export default {
  components: { CTA },
  props: ["id", "title"],
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
