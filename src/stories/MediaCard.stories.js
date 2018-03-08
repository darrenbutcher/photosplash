import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, object } from '@storybook/addon-knobs/react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, Image, Button } from 'semantic-ui-react'

const truncateText = (text = '', maxWords = 0) => {
  if (maxWords === 0 || text === '' ) { return text }
  
  const textArr = text.split(" ")
  
  if (textArr.length > maxWords) {
    return `${textArr.splice(0, maxWords).join(" ")}...`
  }

  return text
}

const CardWrapper = styled(Card)`
`

const CardButton = styled(Button)`
  margin-top: 10px !important;
`


const MediaCard = (props) => {
  const {
    onButtonClick = () => {},
    image = 'https://via.placeholder.com/500x500',
    buttonText,
    buttonRender,
    headerRender,
    truncate,
  } = props

  const title = truncateText(props.title, props.truncate.title)
  const subtitle = truncateText(props.subtitle, props.truncate.subtitle)
  const description = truncateText(props.description, props.truncate.description)

  const renderTitle = () => (
    (title && !headerRender) &&
      <Card.Header>
        {title}
      </Card.Header>
  )
  
  const renderHeader = () => (
    (headerRender && !buttonRender) ?
      headerRender(props) : (null)
  )

  const renderSubtitle = () => (
    (subtitle && !headerRender) &&
      <Card.Meta>
        {subtitle}
      </Card.Meta>
  )

  const renderDescription = () => (
    (description && !headerRender) &&
      <Card.Description>
        {description}
      </Card.Description>
  )

  const renderButton = () => (
    (buttonText && !buttonRender && !headerRender) &&
      <CardButton onClick={onButtonClick}>{buttonText}</CardButton>
  )

  const renderButtonArea = () => (
    buttonRender && !headerRender ? buttonRender(props) : (null)
  )

  const hasContent = () =>
    (buttonText || title || subtitle || description ||
      buttonRender || headerRender)

  const renderContent = () => (
    <Card.Content>
      {renderTitle()}
      {renderHeader()}
      {renderSubtitle()}
      {renderDescription()}
      {renderButton()}
      {renderButtonArea()}
    </Card.Content>
  )

  return (
    <CardWrapper>
      <Image src={image}/>
      {hasContent() && renderContent()}
    </CardWrapper>
  )
}

MediaCard.propTypes = {
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  buttonRender: PropTypes.func,
  headerRender: PropTypes.func,
  onButtonClick: PropTypes.func,
  truncate: PropTypes.shape({
    title: PropTypes.number,
    subtitle: PropTypes.number,
    description: PropTypes.number,
  }),
}

MediaCard.defaultProps = {
  truncate: {
    title: 0,
    subtitle: 0,
    description: 0 
  },
}

const requiredProps = {
  image: 'https://via.placeholder.com/300x250'
}

storiesOf('MediaCard', module)
  .add('default', () => <MediaCard {...requiredProps} />)
  .add('with button', () =>
    <MediaCard 
      {...requiredProps}
      onButtonClick={action('on-button-click')}
      buttonText={text('buttonText', 'Like')} 
    />
  )
  .add('with title', () =>
    <MediaCard {...requiredProps} title={text('title', 'Joe Somebody')} />
  )
  .add('with subtitle', () =>
    <MediaCard {...requiredProps} subtitle={text('subtitle', 'Joined in 2015')} />
  )
  .add('with description', () =>
    <MediaCard {...requiredProps}
      description={text(
        'title', 
        'Matthew is a musician living in Nashville.'
      )}/>
  )
  .add('with buttonRender', () =>
    <MediaCard textForButton="Media Card" text="This is text" title="Help"
      {...requiredProps}
      buttonRender={
        ({text, textForButton}) =>
          <div>
            <Button>{text}</Button>
            <Button>{textForButton}</Button>
          </div>
      }
    />
  )
  .add('with headerRender', () =>
  <MediaCard textForButton="Media Card" text="This is text"
    {...requiredProps}
    headerRender={
      ({text, textForButton}) => (
        <div>
          <h1>{text}</h1>
          <h4>{textForButton}</h4>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
       </div>
      )}
  />
  )
  .add('title truncated', () =>
    <MediaCard {...requiredProps}
      truncate={object('truncate', { title: 2 })}
      title={text('title', 'Joe Somebody Whatss')}
    />
  )
  .add('subtitle truncated', () =>
  <MediaCard {...requiredProps}
    truncate={object('truncate', { subtitle: 5 })}
    subtitle={text('subtitle', 'This is a truncated subtitle look')}
  />
  )
  .add('description truncated', () =>
    <MediaCard {...requiredProps}
    truncate={object('truncate',{ description: 5 })}
      description={text('description', 'This is a truncated description look')}
    />
  )

storiesOf('MediaCard/Patterns', module)
  .add('Sample', () =>
    <MediaCard
      {...requiredProps}
      title={text('title', 'Joe Somebody')}
      subtitle={text('subtitle', 'This is fun')}
      description={text('description', 'This is a description of something that should go here.')}
      buttonText={text('buttonText', 'Save')}
      onButtonClick={action('on-button-click')}
      />
  )
  .add('P1.0', () => 
    <MediaCard
      {...requiredProps}
      title={text('title', 'Joe Somebody')}
      buttonText={text('buttonText', 'Save')}
      onButtonClick={action('on-button-click')}
    />
  )
