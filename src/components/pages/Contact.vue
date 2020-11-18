<template>
  <Page title="Contact" id="contact">
    <PageIntro
      page="contact"
      :title="title"
      :text="introText"
      @form-submitted="openModal"
    />
    <LocationLinks showBgImg />
    <SuccessModal :active="showSuccessModal" @closed="closeModal" />
  </Page>
</template>

<script>
import PageIntro from "../layout/PageIntro";
import LocationLinks from "../layout/LocationLinks";
import SuccessModal from "../UI/SuccessModal";

export default {
  components: { PageIntro, LocationLinks, SuccessModal },
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
  methods: {
    openModal() {
      this.showSuccessModal = true;
    },
    closeModal() {
      this.showSuccessModal = false;
    },
  },
};
</script>
