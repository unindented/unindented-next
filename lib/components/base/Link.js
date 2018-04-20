import { parse } from 'url'

import React from 'react'
import PropTypes from 'prop-types'
import LinkPlain from 'components/base/LinkPlain'
import LinkPrefetch from 'components/base/LinkPrefetch'

const Link = props =>
  isPrefetchable(props.href) ? <LinkPrefetch {...props} prefetch="hover" /> : <LinkPlain {...props} />

Link.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.element,
}

const isPrefetchable = href => {
  const url = parse(href, false, true)
  return url.host == null && url.pathname != null
}

export default Link
