<template>
  <header :class="classes">
    <Logo @clicked="closeMobileMenu" />
    <img
      class="header__nav-toggle"
      :src="togglerIcon"
      alt="nav-toggle"
      @click="toggleMobileMenu"
    />
    <nav class="navigation header__navigation">
      <div class="header__nav-list">
        <NavigationItems location="header" @item-clicked="closeMobileMenu" />
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "../UI/Logo";
import NavigationItems from "../UI/NavigationItems";

export default {
  components: { Logo, NavigationItems },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  computed: {
    classes() {
      return this.mobileMenuOpen ? "header active" : "header";
    },
    togglerIcon() {
      return this.mobileMenuOpen
        ? "/assets/shared/mobile/icon-close.svg"
        : "/assets/shared/mobile/icon-hamburger.svg";
    },
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
  },
  watch: {
    mobileMenuOpen(value) {
      document.querySelector("body").style.overflow = value ? "hidden" : null;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        this.mobileMenuOpen = false;
      }
    });
  },
};
</script>
