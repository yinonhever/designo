<template>
  <header :class="classes">
    <Logo @clicked="closeNavigation" />
    <img
      class="header__nav-toggle"
      :src="togglerIcon"
      alt="nav-toggle"
      @click="toggleNavigation"
    />
    <TheNavigation @item-clicked="closeNavigation" />
  </header>
</template>

<script>
import TheNavigation from "../UI/TheNavigation";

export default {
  components: { TheNavigation },
  data() {
    return {
      navOpen: false,
    };
  },
  computed: {
    classes() {
      return this.navOpen ? "header active" : "header";
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
    },
    closeNavigation() {
      this.navOpen = false;
    },
  },
  watch: {
    navOpen(value) {
      document.querySelector("body").style.overflow = value ? "hidden" : null;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        this.navOpen = false;
      }
    });
  },
};
</script>
