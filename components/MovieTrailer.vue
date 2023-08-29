<template>
  <div class="relative aspect-w-16 aspect-h-9">
    <iframe
      class="absolute inset-0 w-full h-full"
      :src="trailerUrl"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  trailerKey: String,
});

const trailerUrl = computed(() => {
  if (!props.trailerKey) return "";
  return `https://www.youtube.com/embed/${props.trailerKey}`;
});
</script>

<style scoped>
.aspect-w-16 {
  width: 100%;
}

.aspect-h-9 {
  padding-bottom: 40%;
}

@media (max-width: 640px) {
  .aspect-h-9 {
    padding-bottom: 75%;
  }
}
</style>
