<template>
  <div class="BaseButton__container" @click="onClick">
    <div class="BaseButton__text">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  onClick: {
    type: Function,
    default: () => console.log("clicked button")
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.BaseButton__container {
  border: 2px solid rgb(141, 141, 141);
  color: rgb(141, 141, 141);
  padding: 8px;

  border-radius: 10px;

  font-weight: bold;
  cursor: pointer;

  min-width: 150px;
  text-align: center;
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    border-color: black;
    color: #000000;

  }
}
</style>