export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return $fetch(`${config.apiBaseUrl}/trending/movie/day?language=en-US`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
    },
  });
});
