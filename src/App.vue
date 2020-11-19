<template>
  <TheHeader />
  <RouterView v-slot="slotProps">
    <Transition name="page" mode="out-in">
      <component :is="slotProps.Component"></component>
    </Transition>
  </RouterView>
  <TheFooter />
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";
import "./sass/main.scss";

export default {
  components: { TheHeader, TheFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap");

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-active {
  transition: opacity 0.3s ease-out;
}

.page-leave-active {
  transition: opacity 0.3s ease-in;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>
