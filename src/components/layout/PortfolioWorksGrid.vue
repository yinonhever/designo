<template>
  <section class="works-grid">
    <PortfolioWork
      v-for="work in works"
      :key="work.title"
      :image="work.image"
      :title="work.title"
      :description="work.description"
    />
    <img
      class="works-grid__bg"
      src="/assets/shared/desktop/bg-pattern-leaf.svg"
      alt="pattern-leaf"
    />
  </section>
</template>

<script>
import PortfolioWork from "../UI/PortfolioWork";

export default {
  components: { PortfolioWork },
  props: { works: Array },
};
</script>
