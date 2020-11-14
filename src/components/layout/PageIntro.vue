<template>
  <section :class="classes">
    <div class="page-intro__left">
      <h1 class="heading-1 page-intro__heading">{{ title }}</h1>
      <p class="paragraph page-intro__paragraph">
        <slot name="text" />
      </p>
    </div>
    <div class="page-intro__right">
      <slot name="extraContent" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["extraClasses", "title"],
  computed: {
    classes() {
      return this.extraClasses
        ? "page-intro " + this.extraClasses
        : "page-intro";
    },
  },
};
</script>
