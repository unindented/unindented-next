import React from 'react'
import PropTypes from 'prop-types'
import Banner from 'components/base/Banner'
import { LayoutContainerFull } from 'components/layout/LayoutContainer'
import MarkdownRenderer from 'components/markdown/MarkdownRenderer'

const Page = LayoutContainerFull.withComponent('main')
const PageContent = LayoutContainerFull.withComponent('article').extend`
  grid-template-rows: min-content auto;
`

const PageComponent = ({ pageTitle, pageBody }) => (
  <Page id="main">
    <PageContent>
      <Banner>{pageTitle}</Banner>
      <MarkdownRenderer content={pageBody} />
    </PageContent>
  </Page>
)

PageComponent.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageBody: PropTypes.string.isRequired,
}

export default PageComponent
