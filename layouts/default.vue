<template>
  <div>
    <div class="flex self-center justify-center mt-10">
      <NuxtLink class="text-2xl font-bold text-center bg-teal-300 text-slate-100 rounded-lg" to="/">
        Movie App
      </NuxtLink>
    </div>
    <!-- <nav v-if="!isHome" class="flex justify-center mt-2">
      <NuxtLink class="px-4 py-2 border rounded" to="/"> Go Home </NuxtLink>
    </nav> -->
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// check if its the homepage
const isHome = useRoute().path === '/';
</script>
