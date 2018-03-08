import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, object } from '@storybook/addon-knobs/react'

storiesOf('MediaCard', module)
  .add('default', () =>
    <div>Media Card</div>
  )
