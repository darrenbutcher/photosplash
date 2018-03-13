import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs/react'
import { withLoader } from '../components/Loader'

const App = () => {
  return (
    <div>This is some content</div>
  )
}

const AppWithLoader = withLoader(App)

storiesOf('Loader', module)
  .add('loading', () =>
    <AppWithLoader isFetching={boolean('isFetching', true)} />
  )
  .add('loaded', () =>
    <AppWithLoader isFetching={boolean('isFetching', false)} />
  )
