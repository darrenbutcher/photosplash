import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const withLoader = (ComposedComponent) => {
  class Loader extends Component {
    render() {
      if (this.props.isFetching === true) {
        return (
          <div>Loading...</div>
        )
      }
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  return Loader
}

export default withLoader
