<template>
  <nav :class="`${classesPrefix}__navigation`">
    <div :class="`${classesPrefix}__nav-list`">
      <RouterLink
        v-for="item in navItems"
        :key="item.link"
        :to="item.link"
        :class="`${classesPrefix}__nav-link`"
      >
        <span @click="$emit('item-clicked')">{{ item.text }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ["item-clicked"],
  props: { footer: Boolean },
  data() {
    return {
      navItems: [
        { link: "/about", text: "Our company" },
        { link: "/locations", text: "Locations" },
        { link: "/contact", text: "Contact" },
      ],
    };
  },
  computed: {
    classesPrefix() {
      return this.footer ? "footer" : "header";
    },
  },
};
</script>
