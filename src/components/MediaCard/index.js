import React from 'react'
import PropTypes from 'prop-types'
import { forbidExtraProps } from 'airbnb-prop-types'
import styled from 'styled-components'

const MediaCard = (props) => {
  return (
    <div>Media Card</div>
  )
}

MediaCard.defaultProps = {
  type: 'image'
}

MediaCard.propTypes = {
  type: PropTypes.oneOf(['image']),
  src: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape(forbidExtraProps({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      button: PropTypes.shape(forbidExtraProps({
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
      })),
    })),
  ]),
}

export default MediaCard
