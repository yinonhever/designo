<template>
  <PortfolioTemplate v-bind="pageData" />
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        pageTitle: "Graphic Design",
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
        pageLinks: ["Web Design", "App Design"],
      },
    };
  },
};
</script>
