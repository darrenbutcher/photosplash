import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs/react'
import { Search } from '../components/index'
import withTests from './withTests'

const requiredProps = {
  onChange: action('on-change'),
  onSubmit: action('on-submit'),
}

storiesOf('Search', module)
  .addDecorator(withTests('Search'))
  .add('default', () =>
    <Search
      {...requiredProps}
    />
  )
  .add('with placeholder', () =>
    <Search
      {...requiredProps}
      placeholder={text('placeholder', 'Search')}
    />
  )
  .add('button text', () =>
    <Search
      {...requiredProps}
      buttonText={text('buttonText', 'Find')}
    />
  )
