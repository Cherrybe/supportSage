<template>
  <div v-if="isLoading">
    <LoadingGif label="Getting documents..." />
  </div>
  <div class="mt-2 px-6 py-10 rounded-lg BG0 h-full">
    <h1>Sage Home</h1>
  </div>
</template>

<script setup>
import LoadingGif from '@/uiKit/LoadingGif.vue'
// import { ref } from 'vue';
</script>
