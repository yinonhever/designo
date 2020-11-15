<template>
  <Page :title="pageTitle">
    <PortfolioHeader :title="pageTitle" :subtitle="pageSubtitle" />
    <PortfolioWorksGrid :works="works" />
    <section class="portfolio-links-grid">
      <PortfolioPageLink v-for="page in pageLinks" :key="page" :page="page" />
    </section>
  </Page>
</template>

<script>
import PortfolioHeader from "../layout/PortfolioHeader";
import PortfolioWorksGrid from "../layout/PortfolioWorksGrid";
import PortfolioPageLink from "../UI/PortfolioPageLink";

export default {
  components: { PortfolioHeader, PortfolioWorksGrid, PortfolioPageLink },
  props: {
    pageTitle: String,
    pageSubtitle: String,
    works: Array,
    pageLinks: Array,
  },
};
</script>
