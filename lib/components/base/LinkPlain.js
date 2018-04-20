import React, { Children } from 'react'
import PropTypes from 'prop-types'

const LinkPlain = ({ href, children }) => {
  let child = Children.only(children)

  return React.cloneElement(child, { href })
}

LinkPlain.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.element,
}

export default LinkPlain
