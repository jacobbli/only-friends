<template>
  <div class="post__container">
    <div class="post_content">
      <div class="post__header">
        <div class="post__title" v-if="post.level == 0">{{ post.title }}</div>
        <div>{{ post.author }}</div>
        <base-button v-if="showDetails" :onClick="openNewPostModal">Reply to post</base-button>
      </div>
      <div class="post__body" v-if="showDetails">
        <div v-html="post.content"></div>
      </div>
    </div>
    <div class="post__reply">
      <new-post-modal v-if="isNewPostModalOpen" :close-new-post-Modal="closeNewPostModal" :promptId="post.promptId"
        :parentId="post.id" :level="post.level + 1" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

import NewPostModal from '../components/NewPostModal.vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
  post: {
    id: null,
    promptId: null,
    parentId: null,
    level: null,
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
  padding: 12px;

  border-top: 1px gray solid;
  border-bottom: 1px gray solid;


}

.post_content {
  display: flex;
  flex-direction: column;
  padding-left: v-bind('postIndent');

  text-align: left;


  .post__header {
    display: flex;
    justify-content: space-between;

    .post__title {
      font-size: 18px;
      font-weight: bold;

      &:empty {
        display: none;
      }
    }

  }

}

.post__reply {
  height: 400px;

  &:empty {
    display: none;
  }
}
</style>
