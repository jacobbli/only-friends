<template>
  <nav-bar />

  <router-view class="app__content" />
</template>

<script setup>
import NavBar from './components/NavBar.vue';

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
}

.app__content {
  padding: 0 100px;
}
</style>
