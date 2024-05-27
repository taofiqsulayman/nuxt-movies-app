<template>
  <div>
    <div class="flex self-center justify-center mt-10">
      <NuxtLink class="custom-link" to="/">
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


<style scoped>
.custom-link {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem; 
  font-weight: bold;
  text-align: center;
  background-color: #38b2ac; 
  color: #f1f5f9; 
  border-radius: 0.5rem; 
  margin: 0.5rem 1rem; 
  animation: pulse 2s infinite;
  transition: transform 0.3s, box-shadow 0.3s;
}

.custom-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>