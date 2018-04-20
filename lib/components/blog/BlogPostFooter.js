import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LayoutContainerMain } from 'components/layout/LayoutContainer'
import EmailLink from 'components/social/EmailLink'
import TweetLink from 'components/social/TweetLink'

const BlogPostFooter = LayoutContainerMain.withComponent('footer').extend`
  margin: 0 0 2rem;
`
const BlogPostFooterWrapper = styled.div`
  display: flex;
  margin: 0 -0.5rem;
`
const BlogPostFooterMugshot = styled.div`
  padding: 0 0.5rem;
`
const BlogPostFooterImage = styled.img`
  border: 0.125rem solid ${props => props.theme.colors.border};
  border-radius: 50%;
  height: auto;
  width: 3rem;
`
const BlogPostFooterText = styled.p`
  flex: 1;
  font-style: italic;
  margin: 0;
  padding: 0 0.5rem;
`

const BlogPostFooterComponent = ({ postUrl, postTitle, postDate, authorName, authorEmail, authorTwitter }) => (
  <BlogPostFooter>
    <BlogPostFooterWrapper>
      <BlogPostFooterMugshot>
        <picture>
          <source type="image/webp" srcSet="/static/images/me_256.webp" />
          <BlogPostFooterImage src="/static/images/me_256.jpg" alt="" />
        </picture>
      </BlogPostFooterMugshot>
      <BlogPostFooterText>
        Posted on {new Date(postDate).toLocaleDateString()} by {authorName}. Got any comments or suggestions? Send me a{' '}
        <TweetLink text={postTitle} url={postUrl} via={authorTwitter}>
          tweet
        </TweetLink>{' '}
        or an{' '}
        <EmailLink subject={postTitle} to={authorEmail}>
          email
        </EmailLink>.
      </BlogPostFooterText>
    </BlogPostFooterWrapper>
  </BlogPostFooter>
)

BlogPostFooterComponent.propTypes = {
  postUrl: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorEmail: PropTypes.string.isRequired,
  authorTwitter: PropTypes.string.isRequired,
}

export default BlogPostFooterComponent
