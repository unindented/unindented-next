import React from 'react'
import PropTypes from 'prop-types'
import Anchor from 'components/base/Anchor'

const EmailLink = ({ subject, to, children }) => {
  const encodedSubject = encodeURIComponent(subject)
  const href = `mailto:${to}?subject=${encodedSubject}`

  return <Anchor href={href}>{children}</Anchor>
}

EmailLink.propTypes = {
  subject: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default EmailLink
