<template>
  <section :class="classes">
    <div class="page-intro__content">
      <h1 class="heading-1 page-intro__heading">{{ title }}</h1>
      <p class="paragraph page-intro__paragraph">
        <slot />
      </p>
    </div>
    <picture v-if="img">
      <source
        :srcset="imgTablet"
        media="(max-width: 1100px) and (min-width: 501px)"
      />
      <source :srcset="imgMobile" media="(max-width: 500px)" />
      <img class="page-intro__img" :src="img" :alt="title" />
    </picture>
    <TheContactForm v-else-if="contact" />
    <picture v-if="bgImg">
      <source :srcset="bgImgMobile || bgImg" media="(max-width: 600px)" />
      <img class="page-intro__bg" :src="bgImg" alt="bg-pattern" />
    </picture>
  </section>
</template>

<script>
import TheContactForm from "../UI/TheContactForm";

export default {
  components: { TheContactForm },
  props: {
    title: String,
    img: String,
    imgTablet: String,
    imgMobile: String,
    bgImg: String,
    bgImgMobile: String,
    contact: Boolean,
  },
  computed: {
    classes() {
      return this.contact ? "page-intro page-intro--contact" : "page-intro";
    },
  },
};
</script>
