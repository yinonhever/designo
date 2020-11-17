<template>
  <section :class="classes" :id="id">
    <div class="container container--light location__container">
      <div class="location__content">
        <h2 class="heading-2 location__heading">{{ title }}</h2>
        <div class="location__details">
          <div class="location__column">
            <p class="location__subtitle">{{ officeName }}</p>
            <p
              v-for="line in address"
              :key="line"
              class="paragraph location__line"
            >
              {{ line }}
            </p>
          </div>
          <div class="location__column">
            <p class="paragraph location__subtitle">Contact</p>
            <p v-if="phone" class="paragraph">P : {{ phone }}</p>
            <p v-if="email" class="paragraph">M : {{ email }}</p>
          </div>
        </div>
      </div>
      <img
        class="location__bg"
        src="/assets/shared/desktop/bg-pattern-three-circles.svg"
        alt="circles-bg"
      />
    </div>
    <BaseMap :location="id" :center="mapLatLong" />
  </section>
</template>

<script>
import BaseMap from "../UI/BaseMap";

export default {
  components: { BaseMap },
  props: {
    id: String,
    title: String,
    mapLatLong: Array,
    officeName: String,
    address: Array,
    phone: String,
    email: String,
    reversed: Boolean,
  },
  computed: {
    classes() {
      return this.reversed ? "location location--reversed" : "location";
    },
  },
};
</script>
