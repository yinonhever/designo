<template>
  <section :class="classes" :id="id">
    <div class="container container--light about-section__container">
      <picture>
        <source
          :srcset="img.tablet"
          media="(max-width: 1100px) and (min-width: 501px)"
        />
        <source :srcset="img.mobile" media="(max-width: 500px)" />
        <img class="about-section__img" :src="img.desktop" :alt="title" />
      </picture>
      <div class="about-section__content">
        <h2 class="heading-2 about-section__heading">{{ title }}</h2>
        <p
          v-for="paragraph in text"
          :key="paragraph"
          class="paragraph about-section__text"
        >
          {{ paragraph }}
        </p>
      </div>
      <picture>
        <source
          srcset="/assets/shared/desktop/bg-pattern-three-circles.svg"
          media="(max-width: 900px)"
        />
        <img
          class="about-section__bg"
          :src="bgImgDesktop.src"
          alt="circles-bg"
          :style="bgImgDesktop.position"
        />
      </picture>
    </div>
    <img
      class="about-section__external-bg"
      src="/assets/shared/desktop/bg-pattern-leaf.svg"
      alt="pattern-leaf"
    />
  </section>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    text: Array,
    img: Object,
    bgImgDesktop: Object,
    reversed: Boolean,
  },
  computed: {
    classes() {
      return this.reversed
        ? "about-section about-section--reversed"
        : "about-section";
    },
  },
};
</script>
