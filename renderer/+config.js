export default {
  clientRouting: true,
  meta: {
    title: {
      env: { server: true, client: true }
    },
    description: {
      env: { server: true }
    }
  },
  hydrationCanBeAborted: true
}
