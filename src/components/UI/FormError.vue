<template>
  <transition>
    <div v-if="show" class="form__error">
      <span>
        <slot />
      </span>
      <img src="/assets/contact/desktop/icon-error.svg" alt="error-icon" />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>
