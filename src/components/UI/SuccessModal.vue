<template>
  <div :class="classes">
    <div class="container modal__container">
      <i class="modal__close fa fa-times" @click="$emit('closed')" />
      <h2 class="heading-2 modal__heading">Thank you for reaching out!</h2>
      <p class="pargraph modal__text">We'll be in touch soon.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },
  emits: ["closed"],
  computed: {
    classes() {
      return this.active ? "modal active" : "modal";
    },
  },
};
</script>
