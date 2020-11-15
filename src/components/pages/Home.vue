<template>
  <Page title="Home">
    <HomeIntro />
    <section class="portfolio-links-grid">
      <PortfolioPageLink page="Web Design" large />
      <PortfolioPageLink page="App Design" />
      <PortfolioPageLink page="Graphic Design" />
    </section>
    <Features />
  </Page>
</template>

<script>
import HomeIntro from "../layout/HomeIntro";
import PortfolioPageLink from "../UI/PortfolioPageLink";
import Features from "../layout/Features";

export default {
  components: { HomeIntro, PortfolioPageLink, Features },
};
</script>
