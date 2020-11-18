<template>
  <Transition>
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
