import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H2 } from 'components/base/Heading'
import Link from 'components/base/Link'

const HeaderTitle = H2.extend`
  && {
    font-size: ${props => props.theme.scales.h3}rem;
    margin: 0;
  }
`
const HeaderLink = styled.a`
  color: ${props => props.theme.colors.link};
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  transition: color 0.1s ease-in-out;

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.linkHover};
  }
`

const BlogPostExcerptComponent = ({ postSlug, postTitle }) => (
  <li>
    <HeaderTitle>
      <Link href={postSlug}>
        <HeaderLink>{postTitle}</HeaderLink>
      </Link>
    </HeaderTitle>
  </li>
)

BlogPostExcerptComponent.propTypes = {
  postSlug: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
}

export default BlogPostExcerptComponent
