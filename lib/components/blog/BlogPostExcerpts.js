import React from 'react'
import PropTypes from 'prop-types'
import Banner from 'components/base/Banner'
import BlogPostExcerpt from 'components/blog/BlogPostExcerpt'
import { LayoutContainerFull, LayoutContainerMain } from 'components/layout/LayoutContainer'

const BlogPostExcerpts = LayoutContainerFull.withComponent('main')
const BlogPostExcerptsList = LayoutContainerMain.withComponent('ol').extend`
  list-style: none;
  margin: 0;
  padding: 0;
`

const BlogPostExcerptsComponent = ({ title, posts }) => (
  <BlogPostExcerpts>
    {title && <Banner>{title}</Banner>}
    <BlogPostExcerptsList>
      {posts.map(post => <BlogPostExcerpt key={post.slug} postSlug={post.slug} postTitle={post.title} />)}
    </BlogPostExcerptsList>
  </BlogPostExcerpts>
)

BlogPostExcerptsComponent.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default BlogPostExcerptsComponent
