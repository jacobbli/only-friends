<template>
  <div class="newPromptModal__container">
    <div class="newPromptModal__content">
      <h1>Create Post</h1>

      <create-post-form :onSubmit="createPost" :onCancel="closeNewPromptModal" isCreatingPrompt />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import CreatePostForm from '../components/CreatePostForm.vue';
import { broadcast } from '../socket';

const props = defineProps({
  closeNewPromptModal: Function
})

function createPost() {
  broadcast('refresh prompts')
  props.closeNewPromptModal()
}

</script>

<style lang="scss">
.newPromptModal__container {
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(128, 128, 128, 0.5);
  width: 100vw;
  height: 100vh;

  .newPromptModal__content {
    background-color: white;
    border-radius: 12px;

    min-width: 60vw;
    height: 80%;
    padding: 50px;
  }
}
</style>