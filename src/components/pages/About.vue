<template>
  <Page title="About">
    <PageIntro
      title="About Us"
      img="/assets/about/desktop/image-about-hero.jpg"
      imgTablet="/assets/about/tablet/image-about-hero.jpg"
      imgMobile="/assets/about/mobile/image-about-hero.jpg"
      bgImg="/assets/about/desktop/bg-pattern-hero-about-desktop.svg"
      bgImgMobile="/assets/about/mobile/bg-pattern-hero-about-mobile.svg"
    >
      Founded in 2010, we are a creative agency that produces lasting results
      for our clients. We’ve partnered with many startups, corporations, and
      nonprofits alike to craft designs that make real impact. We’re always
      looking forward to creating brands, products, and digital experiences that
      connect with our clients’ audiences.
    </PageIntro>
  </Page>
</template>

<script>
import PageIntro from "../layout/PageIntro";
export default {
  components: { PageIntro },
};
</script>
