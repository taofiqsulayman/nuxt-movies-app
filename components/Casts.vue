<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="cast in castList" :key="cast.id" class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
      <div class="text-center">
        <img
          :src="`${config.public.imageUrl}/${cast.profile_path}`"
          :alt="cast.name"
          class="rounded-full mx-auto h-32 w-32 object-cover"
        />
        <h3 class="text-lg font-semibold mt-2">{{ cast.name }}</h3>
        <p class="text-gray-500 text-sm">{{ cast.character }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  castList: Array,
  config: Object,
});

</script>

<style scoped>
</style>
