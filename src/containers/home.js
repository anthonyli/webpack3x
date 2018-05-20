// 主页
import React from 'react'
import PropTypes from 'prop-types'

import Router from '../router'

Home.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object.isRequired
}

export default function Home({ location, children }) {
  return <Router location={location} />
}
