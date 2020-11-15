<template>
  <PortfolioTemplate v-bind="pageData" />
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        pageTitle: "Graphic Design",
        pageSubtitle:
          "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
        works: [
          {
            title: "Tim Brown",
            image: "/assets/graphic-design/desktop/image-change.jpg",
            description:
              "A book cover designed for Tim Brown’s new release, ‘Change’",
          },
          {
            title: "Boxed Water",
            image: "/assets/graphic-design/desktop/image-boxed-water.jpg",
            description: "A simple packaging concept made for Boxed Water",
          },
          {
            title: "Science!",
            image: "/assets/graphic-design/desktop/image-science.jpg",
            description:
              "A poster made in collaboration with the Federal Art Project",
          },
        ],
        pageLinks: ["Web Design", "App Design"],
      },
    };
  },
};
</script>
