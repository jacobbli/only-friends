<template>
  <div class="newPostForm__container">
    <div class="newPostForm__content">
      <h1>Create Post</h1>

      <create-post-form :onSubmit="createPost" :onCancel="closeNewPostForm" isCreatingPrompt />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import CreatePostForm from '../components/CreatePostForm.vue';
import { broadcast } from '../socket';

const props = defineProps({
  closeNewPostForm: Function
})

function createPost() {
  broadcast('refresh prompts')
  props.closeNewPostForm()
}

</script>

<style lang="scss">
.newPostForm__container {
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(128, 128, 128, 0.5);
  width: 100vw;
  height: 100vh;

  .newPostForm__content {
    background-color: white;
    height: fit-content;
    display: flex;
    flex-direction: column;

    padding: 50px;
  }
}
</style>