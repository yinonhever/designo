<template>
  <main :id="id">
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
      return this.id !== "contact";
    },
  },
  mounted() {
    document.title = this.title ? `${this.title} – Designo` : "Designo";
  },
};
</script>
