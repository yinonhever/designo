<template>
  <header :class="classes">
    <Logo @clicked="closeMobileMenu" />
    <NavToggle @clicked="toggleMobileMenu" />
    <nav class="navigation header__navigation">
      <div class="header__nav-list">
        <NavigationItems location="header" @item-clicked="closeMobileMenu" />
      </div>
      <div class="header__nav-backdrop" @click="closeMobileMenu" />
    </nav>
  </header>
</template>

<script>
import Logo from "../UI/Logo";
import NavToggle from "../UI/NavToggle";
import NavigationItems from "../UI/NavigationItems";

export default {
  components: { Logo, NavToggle, NavigationItems },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  computed: {
    classes() {
      return this.mobileMenuOpen ? "header active" : "header";
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
