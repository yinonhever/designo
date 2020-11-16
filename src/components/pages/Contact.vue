<template>
  <Page title="Contact" id="contact">
    <PageIntro page="contact" :title="title" :text="introText" />
    <LocationLinks />
  </Page>
</template>

<script>
import PageIntro from "../layout/PageIntro";
import LocationLinks from "../layout/LocationLinks";

export default {
  components: { PageIntro, LocationLinks },
  data() {
    return {
      title: "Contact Us",
      introText: "blah blah blah",
    };
  },
};
</script>
