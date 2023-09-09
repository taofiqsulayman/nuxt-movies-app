export default defineEventHandler((event) => {
  const append_to_response = `?append_to_response=videos%2Ccredits&language=en-US`;
  const id = [...event.node.req.url.split('/')].pop();
  const config = useRuntimeConfig();
  return $fetch(`${config.apiBaseUrl}/movie/${id}${append_to_response}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
    },
  });
});

