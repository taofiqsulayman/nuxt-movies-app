<template>
  <div>
    <div class="flex self-center justify-center mt-10">
      <NuxtLink class="text-2xl font-bold text-center" to="/">
        Movie App
      </NuxtLink>
    </div>
    <nav class="flex justify-center mt-2">
      <NuxtLink class="px-4 py-2 border rounded" to="/"> Home </NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>
