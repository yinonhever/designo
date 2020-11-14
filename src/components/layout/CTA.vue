<template>
  <section class="cta" ref="cta">
    <img
      class="cta__bg"
      src="/assets/shared/desktop/bg-pattern-call-to-action.svg"
      alt="circles-bg"
    />
    <div class="cta__container">
      <div class="cta__content">
        <h2 class="heading-2 cta__heading">Let’s talk about your project</h2>
        <p class="paragraph cta__paragraph">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <a href="/contact">
        <BaseButton narrow>Get in touch</BaseButton>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const adjustPlacement = () => {
      const ctaSection = this.$refs.cta;
      if (window.innerWidth < 600) {
        ctaSection.style.marginBottom = `-${ctaSection.offsetHeight / 2}px`;
      } else {
        ctaSection.style.marginBottom = null;
      }
    };
    adjustPlacement();
    window.addEventListener("resize", adjustPlacement);
  },
};
</script>
