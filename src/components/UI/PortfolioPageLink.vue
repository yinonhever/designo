<template>
  <a :class="classes" :href="link">
    <picture>
      <source
        :srcset="tabletImage"
        media="(max-width: 900px) and (min-width: 601px)"
      />
      <source :srcset="mobileImage" media="(max-width: 600px)" />
      <img class="portfolio-link__img" :src="desktopImage" :alt="page" />
    </picture>
    <div class="portfolio-link__content">
      <h2 class="heading-2 portfolio-link__title">{{ page }}</h2>
      <div class="portfolio-link__subtitle-wrapper">
        <h3 class="heading-3 portfolio-link__subtitle">View projects</h3>
        <img
          class="portfolio-link__icon"
          src="/assets/shared/desktop/icon-right-arrow.svg"
          alt="right-arrow"
        />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    page: String,
    large: Boolean,
  },
  computed: {
    classes() {
      return this.large
        ? "portfolio-link portfolio-link--large"
        : "portfolio-link";
    },
    link() {
      if (this.page === "Web Design") return "/web-design";
      else if (this.page === "App Design") return "/app-design";
      else if (this.page === "Graphic Design") return "/graphic-design";
      else return null;
    },
    desktopImage() {
      if (this.page === "Web Design")
        return this.large
          ? "/assets/home/desktop/image-web-design-large.jpg"
          : "/assets/home/desktop/image-web-design-small.jpg";
      else if (this.page === "App Design")
        return "/assets/home/desktop/image-app-design.jpg";
      else if (this.page === "Graphic Design")
        return "/assets/home/desktop/image-graphic-design.jpg";
      else return null;
    },
    tabletImage() {
      if (this.page === "Web Design")
        return "/assets/home/tablet/image-web-design.jpg";
      else if (this.page === "App Design")
        return "/assets/home/tablet/image-app-design.jpg";
      else if (this.page === "Graphic Design")
        return "/assets/home/tablet/image-graphic-design.jpg";
      else return null;
    },
    mobileImage() {
      if (this.page === "Web Design")
        return "/assets/home/mobile/image-web-design.jpg";
      else if (this.page === "App Design")
        return "/assets/home/mobile/image-app-design.jpg";
      else if (this.page === "Graphic Design")
        return "/assets/home/mobile/image-graphic-design.jpg";
      else return null;
    },
  },
};
</script>
