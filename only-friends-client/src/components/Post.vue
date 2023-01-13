<template>
  <div class="post__container">
    <div class="post__header">
      <div class="post__title" v-if="post.level == 0">{{ post.title }}</div>
      <div>{{ post.author }}</div>
      <div class="post__replyButton" v-if="showDetails" @click="openNewPostModal">Reply to post</div>

    </div>
    <div class="post__content" v-if="showDetails">
      <p>{{ post.content }}</p>
    </div>

    <new-post-modal v-if="isNewPostModalOpen" :close-new-post-Modal="closeNewPostModal" :promptId="post.promptId"
      :parentId="post.id" :level="post.level + 1" />

  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

import NewPostModal from '../components/NewPostModal.vue';

const props = defineProps({
  post: {
    id: null,
    level: null,
    promptId: null,
    parentId: null,
    title: null,
    author: null,
    content: null,
  },
  showDetails: {
    type: Boolean,
    default: false
  }
})

const postIndent = (props.post.level + 1) * 16 + 'px'

const isNewPostModalOpen = ref(false)

function openNewPostModal() {
  isNewPostModalOpen.value = true
}

function closeNewPostModal() {
  isNewPostModalOpen.value = false
}
</script>

<style scoped lang="scss">
.post__container {
  border: 1px gray solid;
  margin: 8px;
  padding: 8px;
  padding-left: v-bind('postIndent');

  display: flex;
  flex-direction: column;
  text-align: left;

  .post__header {
    display: flex;
    justify-content: space-between;


    .post__title {
      font-size: 18px;
      font-weight: bold;
    }

    .post__replyButton {
      cursor: pointer;
    }

  }

}
</style>
