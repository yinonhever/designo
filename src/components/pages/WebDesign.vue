<template>
  <PortfolioTemplate v-bind="pageData" />
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        pageTitle: "Web Design",
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
        pageLinks: ["App Design", "Graphic Design"],
      },
    };
  },
};
</script>
