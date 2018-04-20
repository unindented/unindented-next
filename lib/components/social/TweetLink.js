import React from 'react'
import PropTypes from 'prop-types'
import Anchor from 'components/base/Anchor'

const TweetLink = ({ text, url, via, children }) => {
  const encodedText = encodeURIComponent(text)
  const encodedUrl = encodeURIComponent(url)
  const href = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}&via=${via}`

  return (
    <Anchor href={href} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </Anchor>
  )
}

TweetLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  via: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default TweetLink
