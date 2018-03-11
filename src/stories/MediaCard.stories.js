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
