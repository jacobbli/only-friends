<template>
  <div class="newPostForm__content">
    <h1>Reply to Post</h1>

    <create-post-form :onSubmit="createPost" :onCancel="closeNewPostModal" :promptId="promptId" :parentId="parentId"
      :level="level" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { broadcast } from '../socket';

import CreatePostForm from '../components/CreatePostForm.vue';

const props = defineProps({
  closeNewPostModal: Function,
  promptId: {
    type: Number,
    default: null
  },
  parentId: {
    type: Number,
    default: null
  },
  level: {
    type: Number,
    default: null
  },
})


function createPost() {
  broadcast('refresh post')
  props.closeNewPostModal()
}

</script>

<style lang="scss">
.newPostForm__content {
  h1 {
    font-size: 20px;
  }

  background-color: white;
  border-radius: 12px;

  min-width: 60vw;
  height: 100%;
}
</style>