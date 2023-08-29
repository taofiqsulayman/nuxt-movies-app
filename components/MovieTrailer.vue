<template>
  <div>
    <iframe
      :src="'https://www.youtube.com/embed/' + trailerKey"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    trailerKey: String,
  },
};
</script>

<style scoped>
</style>
