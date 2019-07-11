import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.ico'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Tal Williams"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel="icon" href={favicon} />
      <html lang="en" />
    </Helmet>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
