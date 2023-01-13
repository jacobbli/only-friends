<template>
  <form class="inputForm__container">
    <input id="author" v-model="author" placeholder="Username" />
    <input v-if="isCreatingPrompt" id="title" v-model="title" placeholder="Subject" />
    <textarea id="content" v-model="content" placeholder="Content" />
    <div class="inputForm__buttons">
      <div @click="submit">Create post</div>
      <div @click="cancel">Cancel</div>
    </div>
  </form>
</template>

<script setup>
import { ref, defineProps } from 'vue'

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
</script>

<style scoped lang="scss">
.inputForm__container {
  display: flex;
  gap: 20px;
  flex-direction: column;

  textarea {
    width: 100%
  }

  .inputForm__buttons {
    display: flex;
    gap: 10px;

    div {
      cursor: pointer;
      border: 1px solid gray;
      width: 120px;
    }

  }
}
</style>
