import React from 'react'
import PropTypes from 'prop-types'
import Anchor from 'components/base/Anchor'
import Link from 'components/base/Link'

const LinkWithAnchor = ({ className, children, ...props }) => (
  <Link {...props}>
    <Anchor className={className}>{children}</Anchor>
  </Link>
)

LinkWithAnchor.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default LinkWithAnchor
