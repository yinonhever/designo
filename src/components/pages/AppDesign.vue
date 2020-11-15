<template>
  <PortfolioTemplate v-bind="pageData" />
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        pageTitle: "App Design",
        pageSubtitle:
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
        works: [
          {
            title: "Airfilter",
            image: "/assets/app-design/desktop/image-airfilter.jpg",
            description:
              "Solving the problem of poor indoor air quality by filtering the air",
          },
          {
            title: "Eyecam",
            image: "/assets/app-design/desktop/image-eyecam.jpg",
            description:
              "Product that lets you edit your favorite photos and videos at any time",
          },
          {
            title: "Faceit",
            image: "/assets/app-design/desktop/image-faceit.jpg",
            description:
              "Get to meet your favorite internet superstar with the faceit app",
          },
          {
            title: "Todo",
            image: "/assets/app-design/desktop/image-todo.jpg",
            description:
              "A todo app that features cloud sync with light and dark mode",
          },
          {
            title: "Loopstudios",
            image: "/assets/app-design/desktop/image-loopstudios.jpg",
            description: "A VR experience app made for Loopstudios",
          },
        ],
        pageLinks: ["Web Design", "Graphic Design"],
      },
    };
  },
};
</script>
