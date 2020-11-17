<template>
  <section class="location-links">
    <div v-for="item in items" :key="item.id" class="location-column">
      <div class="location-column__img-wrapper">
        <img
          class="location-column__img-bg"
          src="/assets/shared/desktop/bg-pattern-small-circle.svg"
          alt="circle-bg"
        />
        <img class="location-column__img" :src="item.img" :alt="item.title" />
      </div>
      <h3 class="heading-3 location-column__title">{{ item.title }}</h3>
      <RouterLink :to="`/locations#${item.id}`">
        <BaseButton colored>See location</BaseButton>
      </RouterLink>
    </div>
    <img
      v-if="showBgImg"
      class="location-links__bg"
      src="/assets/shared/desktop/bg-pattern-leaf.svg"
      alt="pattern-leaf"
    />
  </section>
</template>

<script>
export default {
  props: {
    showBgImg: Boolean,
  },
  data() {
    return {
      items: [
        {
          id: "canada",
          img: "/assets/shared/desktop/illustration-canada.svg",
          title: "Canada",
        },
        {
          id: "australia",
          img: "/assets/shared/desktop/illustration-australia.svg",
          title: "Australia",
        },
        {
          id: "uk",
          img: "/assets/shared/desktop/illustration-united-kingdom.svg",
          title: "United Kingdom",
        },
      ],
    };
  },
};
</script>
