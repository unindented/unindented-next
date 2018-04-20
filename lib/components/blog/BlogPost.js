import React from 'react'
import PropTypes from 'prop-types'
import Banner from 'components/base/Banner'
import BlogPostFooter from 'components/blog/BlogPostFooter'
import { LayoutContainerFull } from 'components/layout/LayoutContainer'
import MarkdownRenderer from 'components/markdown/MarkdownRenderer'

const BlogPost = LayoutContainerFull.withComponent('main')
const BlogPostContent = LayoutContainerFull.withComponent('article')

const BlogPostComponent = ({ postUrl, postTitle, postDate, postBody, authorName, authorEmail, authorTwitter }) => (
  <BlogPost id="main">
    <BlogPostContent>
      <Banner>{postTitle}</Banner>
      <MarkdownRenderer content={postBody} />
      <BlogPostFooter
        postUrl={postUrl}
        postTitle={postTitle}
        postDate={postDate}
        authorName={authorName}
        authorEmail={authorEmail}
        authorTwitter={authorTwitter}
      />
    </BlogPostContent>
  </BlogPost>
)

BlogPostComponent.propTypes = {
  postUrl: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorEmail: PropTypes.string.isRequired,
  authorTwitter: PropTypes.string.isRequired,
}

export default BlogPostComponent
