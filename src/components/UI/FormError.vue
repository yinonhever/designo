<template>
  <Transition name="error">
    <div v-if="show" class="form__error">
      <span>
        <slot />
      </span>
      <img src="/assets/contact/desktop/icon-error.svg" alt="error-icon" />
    </div>
  </Transition>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style scoped>
.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateX(150%);
}

.error-enter-active,
.error-leave-active {
  transition: all 0.5s;
}

.error-enter-to,
.error-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
