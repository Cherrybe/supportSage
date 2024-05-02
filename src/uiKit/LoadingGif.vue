<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-[#fff] bg-opacity-95 z-50"
  >
    <img src="../assets/LoadingIcon.gif " class="loader-logo" alt="loader-icon" />
    <p class="text-base text-gray-500">{{ label }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Loading...'
  }
})
</script>
<style scoped>
.loader {
  position: relative;
  margin-top: 40px;
}
</style>

<!-- <svg class="animate-spin mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" fill="#192199" fill-opacity="0.1" />
      <circle cx="10" cy="10" r="6" fill="#192199" />
      <path d="M16 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" clip-rule="evenodd" fill="#192199" fill-opacity="0.7" />
    </svg>
    <p class="text-base text-gray-500">Loading emails...</p> -->
