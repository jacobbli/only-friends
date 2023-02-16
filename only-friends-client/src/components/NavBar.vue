<template>
  <div class="navbar__container">
    <div class="navbar__logo">
      OnlyFriends
    </div>
    <div class="navbar__button">
      <router-link to="/">Home</router-link>
    </div>
    <base-button :onClick="openNewPromptForm">Create new post</base-button>
    <new-prompt-modal v-if="isNewPromptFormOpen" :close-new-prompt-modal="closeNewPromptForm" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NewPromptModal from './NewPromptModal.vue';
import BaseButton from './BaseButton.vue';

const isNewPromptFormOpen = ref(false)

function openNewPromptForm() {
  isNewPromptFormOpen.value = true
}

function closeNewPromptForm() {
  isNewPromptFormOpen.value = false
}
</script>
<style lang="scss">
.navbar__container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 100px;


  .navbar__logo {
    font-size: 32px;
    font-family: cursive;
  }

  .navbar__button {


    a {
      color: rgb(141, 141, 141);

      font-weight: bold;
      text-decoration: none;
      color: rgb(141, 141, 141);

      transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;

      &:hover {
        border-color: black;
        color: #000000;

      }
    }

  }
}


@media only screen and (max-width: 600px) {
  .navbar__container {
    padding: 0;

    .navbar__logo {
      font-size: 24px;
      font-family: cursive;
    }
  }
}
</style>
