<template>
  <section class="features">
    <div v-for="item in items" :key="item.title" class="features__item">
      <div class="features__img-wrapper">
        <img
          class="features__img-bg"
          src="/assets/shared/desktop/bg-pattern-small-circle.svg"
          alt="small-circle"
        />
        <img class="features__img" :src="item.image" :alt="item.title" />
      </div>
      <div class="features__content">
        <h3 class="heading-3 features__title">{{ item.title }}</h3>
        <p class="paragraph features__text">{{ item.text }}</p>
      </div>
    </div>
    <img
      class="features__bg"
      src="/assets/shared/desktop/bg-pattern-leaf.svg"
      alt="pattern-leaf"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Passionate",
          text: `Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                    art, design, and technology into exciting new solutions.`,
          image: "/assets/home/desktop/illustration-passionate.svg",
        },
        {
          title: "Resourceful",
          text: `Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
                    collaboration. It guarantees superior results that fulfill our clients’ needs.`,
          image: "/assets/home/desktop/illustration-resourceful.svg",
        },
        {
          title: "Friendly",
          text: `We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
                    strive to give them the best experience a company can provide.`,
          image: "/assets/home/desktop/illustration-friendly.svg",
        },
      ],
    };
  },
};
</script>
