<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <div class="newPost__button" @click="openNewPostForm">Create new post</div>

    <new-prompt-modal v-if="isNewPostFormOpen" :close-new-post-form="closeNewPostForm" />

  </div>
  <router-view />
</template>

<script setup>
import { ref } from 'vue';
import NewPromptModal from './components/NewPromptModal.vue';

const isNewPostFormOpen = ref(false)

function openNewPostForm() {
  isNewPostFormOpen.value = true
}

function closeNewPostForm() {
  isNewPostFormOpen.value = false
}
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 30px;

  border-bottom: 1px solid gray;

  .newPost__button {
    border: 1px solid gray;
    padding: 8px;

    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;

    &:hover {
      color: #42b983;
    }
  }
}
</style>
