<template>
  <PortfolioTemplate v-bind="pageData" />
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        pageTitle: "App Design",
        pageSubtitle: "",
        works: [
          {
            title: "",
            image: "",
            description: "",
          },
          {
            title: "",
            image: "",
            description: "",
          },
          {
            title: "",
            image: "",
            description: "",
          },
          {
            title: "",
            image: "",
            description: "",
          },
          {
            title: "",
            image: "",
            description: "",
          },
          {
            title: "",
            image: "",
            description: "",
          },
        ],
        pageLinks: ["Web Design", "Graphic Design"],
      },
    };
  },
};
</script>
