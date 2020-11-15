<template>
  <footer class="footer">
    <div class="footer__top">
      <Logo white />
      <hr class="footer__seperator" />
      <nav class="navigation footer__navigation">
        <NavigationItems location="footer" />
      </nav>
    </div>
    <div class="footer__bottom">
      <div class="footer__column">
        <p class="paragraph footer__text footer__text--strong">
          Designo Central Office
        </p>
        <p class="paragraph footer__text">
          3886 Wellington Street
        </p>
        <p class="paragraph footer__text">
          Toronto, Ontario M9C 3J5
        </p>
      </div>
      <div class="footer__column">
        <p class="paragraph footer__text footer__text--strong">
          Contact Us (Central Office)
        </p>
        <p class="paragraph footer__text footer__text--strong">
          P : +1 253-863-8967
        </p>
        <p class="paragraph footer__text footer__text--strong">
          M : contact@designo.co
        </p>
      </div>
      <div class="footer__social">
        <a
          v-for="item in socialItems"
          :key="item.icon"
          rel="noopener noreferrer"
          :href="item.link"
          target="_blank"
          class="footer__social-link"
        >
          <img class="footer__social-icon" :src="item.icon" alt="social icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../UI/Logo";
import NavigationItems from "../UI/NavigationItems";

export default {
  components: { Logo, NavigationItems },
  data() {
    return {
      socialItems: [
        {
          link: "https://facebook.com/designo",
          icon: "/assets/shared/desktop/icon-facebook.svg",
        },
        {
          link: "https://youtube.com/designo",
          icon: "/assets/shared/desktop/icon-youtube.svg",
        },
        {
          link: "https://twitter.com/designo",
          icon: "/assets/shared/desktop/icon-twitter.svg",
        },
        {
          link: "https://facebook.com/pinterest",
          icon: "/assets/shared/desktop/icon-pinterest.svg",
        },
        {
          link: "https://instagram.com/designo",
          icon: "/assets/shared/desktop/icon-instagram.svg",
        },
      ],
    };
  },
};
</script>
