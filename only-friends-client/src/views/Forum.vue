<template>
  <div class="forum__container">
    <div class="forum__header">
      <table>
        <tr>
          <td>Title</td>
        </tr>
      </table>
    </div>
    <div class="forum__content">
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
.forum__container {
  display: flex;
  flex-direction: column;
  // gap: 12px;

  .forum__content {
    display: table;
    border-collapse: collapse;
  }

  .forum__prompt {
    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgb(210, 240, 238);
    }
  }
}
</style>