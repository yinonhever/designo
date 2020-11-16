<template>
  <section :class="classes">
    <div class="page-intro__content">
      <h1 class="heading-1 page-intro__heading">{{ title }}</h1>
      <p class="paragraph page-intro__paragraph">
        {{ text }}
      </p>
    </div>
    <TheContactForm v-if="showContactForm" />
    <picture v-else-if="img">
      <source
        :srcset="img.tablet"
        media="(max-width: 1100px) and (min-width: 501px)"
      />
      <source :srcset="img.mobile" media="(max-width: 500px)" />
      <img class="page-intro__img" :src="img.desktop" :alt="title" />
    </picture>
    <picture v-if="bgImg">
      <source :srcset="bgImg.mobile" media="(max-width: 600px)" />
      <img class="page-intro__bg" :src="bgImg.desktop" alt="bg-pattern" />
    </picture>
  </section>
</template>

<script>
import TheContactForm from "../UI/TheContactForm";

export default {
  components: { TheContactForm },
  props: ["page", "title", "text"],
  computed: {
    classes() {
      return this.page === "contact"
        ? "page-intro page-intro--contact"
        : "page-intro";
    },
    showContactForm() {
      return this.page === "contact";
    },
    img() {
      if (this.page === "about")
        return {
          desktop: "/assets/about/desktop/image-about-hero.jpg",
          tablet: "/assets/about/tablet/image-about-hero.jpg",
          mobile: "/assets/about/mobile/image-about-hero.jpg",
        };
      else if (this.page === "contact") return {};
      else return null;
    },
    bgImg() {
      if (this.page === "about")
        return {
          desktop: "/assets/about/desktop/bg-pattern-hero-about-desktop.svg",
          mobile: "/assets/about/mobile/bg-pattern-hero-about-mobile.svg",
        };
      else if (this.page === "contact") return {};
      else return null;
    },
  },
};
</script>
