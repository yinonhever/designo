<template>
  <header :class="classes">
    <Logo />
    <img
      class="header__nav-toggle"
      :src="togglerIcon"
      alt="nav-toggle"
      @click="toggleNavigation"
    />
    <div class="header__navigation">
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
