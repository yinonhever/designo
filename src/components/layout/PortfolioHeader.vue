<template>
  <section class="portfolio-header">
    <div class="container container--strong portfolio-header__container">
      <div class="portfolio-header__content">
        <h1 class="heading-1 portfolio-header__heading">
          {{ title }}
        </h1>
        <p class="paragraph portfolio-header__text">
          {{ subtitle }}
        </p>
      </div>
      <picture>
        <source
          srcset="/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
          media="(max-width: 900px) and (min-width: 601px)"
        />
        <source
          srcset="/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
          media="(max-width: 600px)"
        />
        <img
          class="portfolio-header__bg"
          :src="bgImgDesktop"
          alt="circles-bg"
          :style="bgPositionDesktop"
        />
      </picture>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "subtitle"],
  computed: {
    bgImgDesktop() {
      if (this.title === "Web Design")
        return "/assets/web-design/desktop/bg-pattern-intro-web.svg";
      else if (this.title === "App Design")
        return "/assets/app-design/desktop/bg-pattern-intro-app.svg";
      else if (this.title === "Graphic Design")
        return "/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg";
      else return null;
    },
    bgPositionDesktop() {
      if (this.title === "Web Design") return { right: 0 };
      else if (this.title === "App Design" || this.title === "Graphic Design")
        return { left: 0 };
      else return null;
    },
  },
};
</script>
