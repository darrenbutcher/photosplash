import React from 'react'
import PropTypes from 'prop-types'
import { forbidExtraProps } from 'airbnb-prop-types'
import {
  isEmpty,
  isObject,
  isFunction,
  isString,
} from 'lodash'
import { Card, Image, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const CardWrapper = styled(Card)`
`

const CardButton = styled(Button)`
`

const CardButtonWrapper = styled.div`
  ${props =>
    (props.body.title || props.body.subtitle || props.body.description) &&
      `margin-top: 10px`
  }
`

const BodySpacer = styled.div`
  height: 19px;
`

const MediaCard = (props) => {
  const MEDIA_TYPE = {
    image: 'image'
  }

  const {
    body,
    src,
    type,
  } = props

  const renderTitle = () => (
    body.title ?
    (
      <Card.Header>
        {body.title}
      </Card.Header>
    ) :
      (null)
  )

  const renderSubtitle = () => (
    body.subtitle ?
    (
      <Card.Meta>
        {body.subtitle}
      </Card.Meta>
    ) :
      (null)
  )

  const renderDescription = () => (
    body.description ?
    (
      <Card.Description>
        {body.description}
      </Card.Description>
    ) :
      (null)
  )

  const renderButton = () => (
    (body.button && body.button.text && body.button.onClick) ?
    ( 
      <CardButtonWrapper body={body}>
        <CardButton onClick={body.button.onClick}>
          {body.button.text}
        </CardButton>
      </CardButtonWrapper>
    ) :
      (null)
  )

  const renderBody = () => {
    return (
      <Card.Content>
        {renderTitle()}
        {renderSubtitle()}
        {renderDescription()}
        {renderButton()}
      </Card.Content>
    )
  }

  const renderContent = () => {
    if (isFunction(body)) {
      return (
        <Card.Content>
          {body(props)}
        </Card.Content>
      )
    } else if (isObject(body) && !isEmpty(body)) {
      return renderBody()
    } else {
      return (
        <Card.Content>
          <BodySpacer />
        </Card.Content>
      )
    }
  }

  const getImage = (src) => (
    (isString(src) && isEmpty(src)) ?
    ('https://via.placeholder.com/500x500') : (src)
  )

  return(
    <CardWrapper>
      {type === MEDIA_TYPE.image && <Image src={getImage(src)} />}
      {renderContent()}
    </CardWrapper>
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
