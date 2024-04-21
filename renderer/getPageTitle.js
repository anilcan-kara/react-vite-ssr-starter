export function getPageTitle(pageContext) {
  return pageContext.data?.title || pageContext.config.title || 'ACKPOS'
}
