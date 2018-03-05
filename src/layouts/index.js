import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.ico'
import './index.css'

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
