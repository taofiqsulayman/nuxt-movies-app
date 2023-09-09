<template>
  <div class="flex flex-col">
    <div class="flex justify-center items-center h-32">
      <input
        type="text"
        class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
        v-model="searchTerm"
        placeholder="Search Movies ..."
      />
      <button v-if="searchTerm" class="ml-2" @click="resetSearchTerm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div
      class="grid grid-cols-1 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-10 mb-10"
    >
      <div v-for="movie in moviesToShow" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>

    <div v-if="data?.results.length" class="flex justify-center gap-2">
      <button
        v-if="!disabledPrevious"
        class="py-4 px-2 text-base border rounded-lg"
        @click="page--"
      >
        Previous
      </button>
      <p class="py-4 px-2 text-base border rounded-lg">{{ page }}</p>
      <button
        v-if="!disabledNext"
        class="py-4 px-2 text-base border rounded-lg"
        @click="page++"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { APIResponse } from "types/APIResponse";

const defaultMovies = ref<APIResponse | null>(null);

const defaultMoviesUrl = computed(() => {
  return `/api/movies/trending`;
});

const fetchDefaultMovies = async () => {
  const response = await useFetch<APIResponse>(defaultMoviesUrl.value);
  defaultMovies.value = response.data.value;
};

const searchTerm = ref("");
const debouncedSearchTerm = refDebounced(searchTerm, 700);

const page = ref(1);
const disabledPrevious = computed(() => page.value === 1);
const disabledNext = computed(() => page.value + 1 === data.value?.total_pages);

const url = computed(() => {
  return `/api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`;
});

const { data } = await useFetch<APIResponse>(url);

const moviesToShow = computed(() => {
  return searchTerm.value
    ? data.value?.results
    : defaultMovies.value?.results || [];
});

const resetSearchTerm = () => {
  searchTerm.value = '';
};

onMounted(() => {
  fetchDefaultMovies();
});
</script>
