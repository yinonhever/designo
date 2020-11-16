<template>
  <span class="header__nav-toggle" @click="$emit('clicked')">
    <span /><span /><span />
  </span>
</template>

<script>
export default {
  emits: ["clicked"],
};
</script>
