<template>
  <Page title="Home">
    <HomeIntro />
    <PortfolioLinksGrid />
    <Features />
  </Page>
</template>

<script>
import HomeIntro from "../layout/HomeIntro";
import PortfolioLinksGrid from "../layout/PortfolioLinksGrid";
import Features from "../layout/Features";

export default {
  components: { HomeIntro, PortfolioLinksGrid, Features },
};
</script>
