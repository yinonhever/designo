<template>
  <PortfolioTemplate v-bind="pageData" />
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        pageTitle: "Web Design",
        pageSubtitle:
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
        works: [
          {
            title: "Express",
            image: "/assets/web-design/desktop/image-express.jpg",
            description:
              "A multi-carrier shipping website for ecommerce businesses",
          },
          {
            title: "Transfer",
            image: "/assets/web-design/desktop/image-transfer.jpg",
            description:
              "Site for low-cost money transfers and sending money within seconds",
          },
          {
            title: "Photon",
            image: "/assets/web-design/desktop/image-photon.jpg",
            description:
              "A state-of-the-art music player with high-resolution audio and DSP effects",
          },
          {
            title: "Builder",
            image: "/assets/web-design/desktop/image-builder.jpg",
            description:
              "Connects users with local contractors based on their location",
          },
          {
            title: "Blogr",
            image: "/assets/web-design/desktop/image-blogr.jpg",
            description:
              "Blogr is a platform for creating an online blog or publication",
          },
          {
            title: "Camp",
            image: "/assets/web-design/desktop/image-camp.jpg",
            description:
              "Get expert training in coding, data, design, and digital marketing",
          },
        ],
        pageLinks: ["App Design", "Graphic Design"],
      },
    };
  },
};
</script>
