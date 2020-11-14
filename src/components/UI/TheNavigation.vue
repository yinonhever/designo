<template>
  <nav class="header__navigation">
    <div class="header__nav-list">
      <RouterLink
        v-for="item in navItems"
        :key="item.link"
        :to="item.link"
        class="header__nav-link"
      >
        <span @click="$emit('item-clicked')">{{ item.text }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ["item-clicked"],
  data() {
    return {
      navItems: [
        { link: "/about", text: "Our company" },
        { link: "/locations", text: "Locations" },
        { link: "/contact", text: "Contact" },
      ],
    };
  },
};
</script>
