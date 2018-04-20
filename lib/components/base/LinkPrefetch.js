import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'

export default class LinkPrefetch extends Component {
  render() {
    const { href, prefetch, children } = this.props
    let child = Children.only(children)

    if (prefetch === 'hover') {
      child = React.cloneElement(child, { onMouseEnter: this.linkHovered })
    }

    return (
      <Link href={href} passHref prefetch={prefetch === 'load'}>
        {child}
      </Link>
    )
  }

  linkHovered = () => {
    const { href } = this.props
    Router.prefetch(href)
  }
}

LinkPrefetch.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  prefetch: PropTypes.oneOf(['load', 'hover']),
  children: PropTypes.element,
}
