import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, object } from '@storybook/addon-knobs/react'
import MediaCard from '../components/MediaCard'

const requiredProps = {
  type: 'image',
  src: 'https://via.placeholder.com/300x250'
}

storiesOf('MediaCard', module)
  .add('default', () =>
    <MediaCard
      src=""
    />
  )
  .add('with title', () =>
    <MediaCard
      src={requiredProps.src}
      body={{
        title: text('title', 'Title')
      }}
    />
  )
  .add('with subtitle', () =>
    <MediaCard
      src={requiredProps.src}
      body={{
        subtitle: text('subtitle', 'Subtitle')
      }}
    />
  )
  .add('with description', () =>
    <MediaCard
      src={requiredProps.src}
      body={{
        description: text('description', 'Description')
      }}
    />
  )
  .add('with button', () =>
    <MediaCard
      src={requiredProps.src}
      body={{
        button: {
          ...object('body.button', { text: 'Button' }),
          onClick: action('on-click')
        }
      }}
    />
  )
  storiesOf('MediaCard/Examples', module)
  .add('Sample', () =>
    <MediaCard
      {...requiredProps}
      body={{
        ...object('body.title', { title: 'Joe Somebody' }),
        ...object('body.subtitle', { subtitle: 'This is fun' }),
        ...object('body.description', {
          description: 'This is a description of something that should go here.'
         }),
        button: {
          ...object('body.button', { text: 'Like' }),
          onClick: action('on-click')
        }
      }}
    />
  )
  .add('X1.0', () => 
    <MediaCard
      {...requiredProps}
      body={{
        ...object('body.title', { title: 'Joe Somebody' }),
        button: {
          ...object('body.button', { text: 'Save' }),
          onClick: action('on-click')
        }
      }}
    />
  )

  // title={text('title', 'Joe Somebody')}
  // buttonText={text('buttonText', 'Save')}
  // onButtonClick={action('on-button-click')}
