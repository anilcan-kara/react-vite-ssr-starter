import PropTypes from 'prop-types'

import { usePageContext } from './usePageContext'

export function Link(props) {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext
  const { href } = props
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href)
  const className = [props.className, isActive && 'is-active'].filter(Boolean).join(' ')
  return <a {...props} className={className} />
}

Link.propTypes = { className: PropTypes.string, href: PropTypes.string.isRequired }
