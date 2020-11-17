<template>
  <section class="home-intro">
    <div class="container container--strong home-intro__container">
      <div class="home-intro__content">
        <h1 class="heading-1 home-intro__heading">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p class="paragraph home-intro__paragraph">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <RouterLink to="/about">
          <BaseButton>Learn More</BaseButton>
        </RouterLink>
      </div>
      <img
        class="home-intro__bg"
        src="/assets/home/desktop/bg-pattern-hero-home.svg"
        alt="home-intro-bg"
      />
      <img
        class="home-intro__img"
        src="/assets/home/desktop/image-hero-phone.png"
        alt="hero-phone"
      />
    </div>
  </section>
</template>
