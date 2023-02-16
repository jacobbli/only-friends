<template>
  <form class="createPostForm__container">
    <input id="author" v-model="author" placeholder="Username" />
    <input v-if="isCreatingPrompt" id="title" v-model="title" placeholder="Subject" />
    <rich-text-editor class="createPostForm__richTextEditor" :onUpdate="updateContent" />
    <div class="createPostForm__buttons">
      <base-button :onClick="submit">Create post</base-button>
      <base-button :onClick="cancel">Cancel</base-button>
    </div>
  </form>

</template>

<script setup>
import { ref, defineProps } from 'vue'

import RichTextEditor from './RichTextEditor.vue'
import BaseButton from './BaseButton.vue';

import { addPost } from '../api/posts.js'

const props = defineProps({
  onSubmit: Function,
  onCancel: Function,
  isCreatingPrompt: {
    type: Boolean,
    default: false
  },
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

const author = ref('')
const title = ref('')
const content = ref('')

function submit() {
  const params = {
    level: props.level ? props.level : 0,
    promptId: props.promptId ? props.promptId : -1,
    parentId: props.parentId ? props.parentId : -1,
    title: title.value,
    author: author.value,
    content: content.value
  }
  addPost(params)
  props.onSubmit()

}

function cancel() {
  props.onCancel()
}

function updateContent(newContent) {
  content.value = newContent
}

</script>

<style scoped lang="scss">
.createPostForm__container {
  display: flex;
  flex-direction: column;

  gap: 12px;
  height: 80%;

  .createPostForm__richTextEditor {
    height: 80%;
  }

  .createPostForm__buttons {
    display: flex;
    gap: 10px;
  }
}
</style>
