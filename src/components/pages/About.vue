<template>
  <Page title="About">
    <PageIntro page="about" :title="title" :text="introText" />
    <AboutSection v-bind="aboutSections[0]" />
    <LocationLinks />
    <AboutSection v-bind="aboutSections[1]" />
  </Page>
</template>

<script>
import PageIntro from "../layout/PageIntro";
import AboutSection from "../layout/AboutSection";
import LocationLinks from "../layout/LocationLinks";

export default {
  components: { PageIntro, AboutSection, LocationLinks },
  data() {
    return {
      title: "About Us",
      introText: `
        Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We’ve partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences that
        connect with our clients’ audiences.
      `,
      aboutSections: [
        {
          id: "worldclass",
          title: "World-class talent",
          img: {
            desktop: "/assets/about/desktop/image-world-class-talent.jpg",
            tablet: "/assets/about/tablet/image-world-class-talent.jpg",
            mobile: "/assets/about/mobile/image-world-class-talent.jpg",
          },
          text: [
            `We are a crew of strategists, problem-solvers, and technologists. Every
                design is thoughtfully crafted from concept to launch, ensuring success in
                its given market. We are constantly updating our skills in a myriad of
                platforms.`,
            `Our team is multi-disciplinary and we are not merely interested in form —
                content and meaning are just as important. We give great importance to
                craftsmanship, service, and prompt delivery. Clients have always been
                impressed with our high-quality outcomes that encapsulates their brand’s
                story and mission.`,
          ],
          bgImgDesktop: {
            src: "/assets/shared/desktop/bg-pattern-three-circles.svg",
            position: { right: "18%", bottom: 0 },
          },
          reversed: false,
          showExternalBg: true,
        },
        {
          id: "realdeal",
          title: "The real deal",
          img: {
            desktop: "/assets/about/desktop/image-real-deal.jpg",
            tablet: "/assets/about/tablet/image-real-deal.jpg",
            mobile: "/assets/about/mobile/image-real-deal.jpg",
          },
          text: [
            `As strategic partners in our clients’ businesses, we are ready to take on
                any challenge as our own. Solving real problems require empathy and
                collaboration, and we strive to bring a fresh perspective to every
                opportunity. We make design and technology more accessible and give you
                tools to measure success.`,
            `We are visual storytellers in appealing and captivating ways. By combining
                business and marketing strategies, we inspire audiences to take action and
                drive real results.`,
          ],
          bgImgDesktop: {
            src: "/assets/shared/desktop/bg-pattern-two-circles.svg",
            position: { left: 0, bottom: 0 },
          },
          reversed: true,
          showExternalBg: false,
        },
      ],
    };
  },
};
</script>
