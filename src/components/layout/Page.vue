<template>
  <main class="page">
    <slot />
  </main>
</template>

<script>
export default {
  props: ["title"],
  mounted() {
    window.scrollTo(0, 0);
    document.title = this.title ? `${this.title} – Designo` : "Designo";
  },
};
</script>
