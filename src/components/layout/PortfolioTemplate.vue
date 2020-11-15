<template>
  <Page :title="pageTitle">
    <PortfolioHeader :title="pageTitle" :subtitle="pageSubtitle" />
    <section class="works-grid">
      <PortfolioWork
        v-for="work in works"
        :key="work.title"
        :image="work.image"
        :title="work.title"
        :description="work.description"
      />
    </section>
    <section class="portfolio-links-grid">
      <PortfolioPageLink v-for="page in pageLinks" :key="page" :page="page" />
    </section>
  </Page>
</template>

<script>
import PortfolioHeader from "../layout/PortfolioHeader";
import PortfolioWork from "../UI/PortfolioWork";
import PortfolioPageLink from "../UI/PortfolioPageLink";

export default {
  components: { PortfolioHeader, PortfolioWork, PortfolioPageLink },
  props: ["pageTitle", "pageSubtitle", "works", "pageLinks"],
};
</script>
