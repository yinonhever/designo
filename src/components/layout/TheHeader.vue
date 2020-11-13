<template>
  <header class="header">
    <Logo />
    <img
      class="header__nav-toggle"
      :src="togglerIcon"
      alt="nav-toggle"
      @click="toggleNavigation"
    />
    <div :class="navClasses">
      <div class="header__nav-list">
        <a class="header__nav-link" href="/about">Our company</a>
        <a class="header__nav-link" href="/locations">Locations</a>
        <a class="header__nav-link" href="/contact">Contact</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
  computed: {
    navClasses() {
      return this.navOpen ? "header__navigation active" : "header__navigation";
    },
    togglerIcon() {
      return this.navOpen
        ? "/assets/shared/mobile/icon-close.svg"
        : "/assets/shared/mobile/icon-hamburger.svg";
    },
  },
  methods: {
    toggleNavigation() {
      this.navOpen = !this.navOpen;
      document.querySelector("body").style.overflow = this.navOpen
        ? "hidden"
        : null;
    },
  },
};
</script>
