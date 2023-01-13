<template>
  <div class="prompt">
    <post v-if="prompt.id" :post="prompt" showDetails />
    <post v-for="post in replies" :key="post.id" :post="post" showDetails />
  </div>

</template>
<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

import { getPosts } from '../api/posts'
import { initializeSocket, subscribeToPosts } from '../socket';

import Post from '../components/Post.vue';

// const router = useRouter()
const route = useRoute()
const prompt = ref({
  id: null,
  level: null,
  promptId: null,
  parentId: null,
  title: null,
  author: null,
  content: null,
})

const replies = ref([])

onMounted(async () => {
  initializeSocket();

  subscribeToPosts('refresh post', async () => {
    const newPosts = await getPosts(route.params.id)
    replies.value = newPosts.length > 1 ? newPosts.slice(1) : []

  });


  const posts = await getPosts(route.params.id)
  prompt.value = posts.length > 0 ? posts[0] : []
  replies.value = posts.length > 1 ? posts.slice(1) : []
  console.log(replies.value)
})



</script>

<style lang="scss">
.prompt__container {
  border: 1px gray solid;
  margin: 8px;
  padding: 8px;

  display: flex;
  justify-content: space-between;
  // display: flex;
  // gap: 100px;

  .prompt__title {
    font-size: 18px;
    margin: 0;
  }

}
</style>
