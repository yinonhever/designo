<template>
  <Page title="Home">
    <HomeIntro />
    <HomePortfolioLinks />
    <Features />
  </Page>
</template>

<script>
import HomeIntro from "../layout/HomeIntro";
import HomePortfolioLinks from "../layout/HomePortfolioLinks";
import Features from "../layout/Features";

export default {
  components: { HomeIntro, HomePortfolioLinks, Features },
};
</script>
