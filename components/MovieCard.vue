<template>
  <div class="h-128 w-64 border flex flex-col text-center">
    <div class="mb-5 bg-green-600 inline-block">
      <img class="transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block h-96 w-64" :src="imageUrl" alt="Movie Poster">
    </div>
    <div class="text-lg">
      {{ movie?.title  }}
    </div>
    <p class="text-md text-gray-500 break-words text-wrap truncate overflow-hidden px-2">
      {{ releaseYear  }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Movie } from "types/Movie";
import { defineProps, PropType } from "vue";
const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: true
  }
});
const releaseYear = computed(() => {
  return props.movie?.release_date?.split('-')[0];
});
const config = useRuntimeConfig();
const imageUrl = computed(() => {
  return props.movie?.poster_path ? `${config.public.imageUrl}/${props.movie.poster_path}` : 'https://via.placeholder.com/300x500';
});
</script>
