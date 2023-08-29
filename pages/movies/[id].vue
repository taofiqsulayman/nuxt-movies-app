<template>
  <div class="flex flex-col px-20 mt-10">
    <movie-trailer class="mb-8" v-if="trailerKey" :trailer-key="trailerKey" />
    <div v-else class="hidden md:block relative overflow-hidden rounded-lg mb-4">
      <img
        class="w-full h-96 object-center object-cover"
        :src="backdropImageUrl"
        alt="poster"
      />
      <div class="absolute bottom-0 left-0 p-4 bg-opacity-70 backdrop-blur-lg">
        <div class="text-white text-3xl font-bold mb-2">
          {{ data?.title }}
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-5 gap-2">
      <img class="w-full md:col-span-2 hidden md:block" :src="imageUrl" alt="" />
      <div class="flex flex-col md:col-span-3">
        <div class="text-4xl font-sans font-bold mb-5">
          {{ data?.title }}
        </div>

        <div class="flex flex-wrap">
          <div
            v-for="genre in data?.genres"
            :key="genre.id"
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2 mb-2"
          >
            {{ genre.name }}
          </div>
        </div>

        <div class="text-lg my-2">Release Date: {{ data?.release_date }}</div>

        <div class="text-lg mb-2">Duration: {{ data?.runtime }}</div>

        <p class="text-gray-600 text-sm">Overview: {{ data?.overview }}</p>
        <div class="text-lg my-2">
          Rating:
          <span
            :class="{
              'text-green-500': data?.vote_average && data?.vote_average >= 5,
              'text-red-500': data?.vote_average && data?.vote_average < 5,
            }"
          >
            {{ data?.vote_average }}
          </span>
        </div>

        <div class="text-sm mb-2">Total votes: {{ data?.vote_count }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Movie } from "types/Movie";
import MovieTrailer from "@/components/MovieTrailer.vue";

const route = useRoute();
const config = useRuntimeConfig();
const movieId = computed(() => route.params.id);

const { data } = await useFetch<Movie>(`/api/movies/${movieId.value}`);
const imageUrl = computed(() =>
  data.value?.poster_path
    ? `${config.public.imageUrl}/${data.value.poster_path}`
    : "https://via.placeholder.com/300x500"
);
const backdropImageUrl = computed(() =>
  data.value?.backdrop_path
    ? `${config.public.backdropUrl}/${data.value.backdrop_path}`
    : "https://via.placeholder.com/300x500"
);
const trailerKey = computed(() =>
  data.value?.videos?.results?.length !== undefined &&
  data.value.videos.results.length > 0
    ? data.value.videos.results[0].key
    : null
);
</script>
