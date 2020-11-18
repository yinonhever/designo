<template>
  <Page title="Contact" id="contact">
    <PageIntro page="contact" :title="title" :text="introText" />
    <LocationLinks showBgImg />
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
      introText: `Ready to take it to the next level? Let’s talk about your project or idea
        and find out how we can help your business grow. If you are looking for
        unique digital experiences that’s relatable to your users, drop us a line.
      `,
      showSuccessModal: false,
    };
  },
};
</script>
