import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs/react'
import { Search } from '../components/index'
import withTests from './withTests'

storiesOf('Search', module)
  .add('default', () =>
    <Search />
  )
  .add('with placeholder', () =>
    <Search />
  )
