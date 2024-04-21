import ReactDOM from 'react-dom/client'

import { PageShell } from './PageShell'
import { getPageTitle } from './getPageTitle'

export function onRenderClient(pageContext) {
  const { Page } = pageContext

  // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
  // to support SPA
  if (!Page) throw new Error('My onRenderClient() hook expects pageContext.Page to be defined')

  const container = document.getElementById('react-root')

  if (!container) throw new Error('DOM element #react-root not found')

  const page = (<PageShell pageContext={pageContext}><Page /></PageShell>)

  if (pageContext.isHydration) {
    ReactDOM.hydrateRoot(container, page)
  } else {
    ReactDOM.createRoot(container).render(page)
  }

  document.title = getPageTitle(pageContext)
}
