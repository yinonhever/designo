<template>
  <RouterLink
    v-for="item in items"
    :key="item.link"
    :to="item.link"
    :class="`nav-link ${location}__nav-link`"
  >
    <span @click="$emit('item-clicked')">
      {{ item.text }}
    </span>
  </RouterLink>
</template>

<script>
export default {
  props: ["location"],
  emits: ["item-clicked"],
  data() {
    return {
      items: [
        { link: "/about", text: "Our company" },
        { link: "/locations", text: "Locations" },
        { link: "/contact", text: "Contact" },
      ],
    };
  },
};
</script>
