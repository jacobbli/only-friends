<template>
  <div class="forum__container">
    <div class="forum__container">
      <post class="forum__prompt" v-for="prompt in prompts" :key="prompt.id" :post="prompt"
        @click="() => goToPrompt(prompt.id)" />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

import Post from '../components/Post.vue';
import { getPrompts } from '../api/posts';

import { initializeSocket, subscribeToPosts } from '../socket';
const router = useRouter()


const prompts = ref([])

onMounted(async () => {
  initializeSocket();

  subscribeToPosts('refresh prompts', async () => {
    prompts.value = await getPrompts()
  });

  prompts.value = await getPrompts()
})

function goToPrompt(promptId) {
  router.push({ name: 'Prompt', params: { 'id': promptId } })
}

</script>


<style lang="scss">
.forum__prompt {
  cursor: pointer;
}
</style>