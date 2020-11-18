<template>
  <section :class="classes">
    <div class="container container--strong page-intro__container">
      <div class="page-intro__content">
        <h1 class="heading-1 page-intro__heading">{{ title }}</h1>
        <p class="paragraph page-intro__paragraph">
          {{ text }}
        </p>
      </div>
      <TheForm v-if="showContactForm" @success="$emit('form-submitted')" />
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
    </div>
  </section>
</template>

<script>
import TheForm from "../UI/TheForm";

export default {
  components: { TheForm },
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
      else return null;
    },
    bgImg() {
      if (this.page === "about")
        return {
          desktop: "/assets/about/desktop/bg-pattern-hero-about-desktop.svg",
          mobile: "/assets/about/mobile/bg-pattern-hero-about-mobile.svg",
        };
      else if (this.page === "contact")
        return {
          desktop: "/assets/contact/desktop/bg-pattern-hero-desktop.svg",
          mobile: "/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg",
        };
      else return null;
    },
  },
};
</script>
