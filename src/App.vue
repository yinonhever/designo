<template>
  <TheHeader />
  <Home />
  <CTA />
  <TheFooter />
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";
import CTA from "./components/layout/CTA";
import Home from "./components/pages/Home";
import "./sass/main.scss";

export default {
  components: {
    TheHeader,
    TheFooter,
    CTA,
    Home,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap");
</style>
