<template>
  <div class="work">
    <img class="work__img" :src="image" :alt="title" />
    <div class="work__content">
      <h3 class="heading-3 work__title">{{ title }}</h3>
      <p class="paragraph work__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "image", "description"],
};
</script>
