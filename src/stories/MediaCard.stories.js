import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs/react'

const MediaCard = () => <div>MediaCard</div>

storiesOf('MediaCard', module)
  .add('default', () => <MediaCard />)
