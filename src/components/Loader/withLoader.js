import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Loader, Dimmer } from 'semantic-ui-react'

const withLoader = (ComposedComponent) => {
  class LoaderHOC extends Component {
    render() {
      if (this.props.isFetching === true) {
        return (
          <Dimmer active inverted>
            <Loader inverted />
          </Dimmer>
        )
      }
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  return LoaderHOC
}

export default withLoader
