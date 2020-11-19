<template>
  <section class="cta" id="cta" ref="cta">
    <div class="container container--strong cta__container">
      <img
        class="cta__bg"
        src="/assets/shared/desktop/bg-pattern-call-to-action.svg"
        alt="circles-bg"
      />
      <div class="cta__inner">
        <div class="cta__content">
          <h2 class="heading-2 cta__heading">Let’s talk about your project</h2>
          <p class="paragraph cta__paragraph">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <RouterLink to="/contact">
          <BaseButton narrow>Get in touch</BaseButton>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    adjustPlacement() {
      const ctaSection = this.$refs.cta;
      if (ctaSection && window.innerWidth < 600) {
        ctaSection.style.marginBottom = `-${ctaSection.offsetHeight / 2}px`;
      } else {
        ctaSection.style.marginBottom = null;
      }
    },
  },
  mounted() {
    this.adjustPlacement();
    window.addEventListener("resize", this.adjustPlacement);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPlacement);
  },
};
</script>
