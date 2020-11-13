<template>
  <main class="page">
    <slot />
    <CTA v-if="title !== 'Contact'" />
  </main>
</template>

<script>
import CTA from "./CTA";

export default {
  components: { CTA },
  props: ["title"],
  mounted() {
    window.scrollTo(0, 0);
    document.title = this.title ? `${this.title} – Designo` : "Designo";
  },
};
</script>
