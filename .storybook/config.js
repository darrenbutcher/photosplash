import React from 'react'
import * as storybook from '@storybook/react'
import '@storybook/addon-console'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs/react'
import withTests from '../src/stories/withTests'
//import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'

setOptions({
  name: 'Photo Splash',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
  sidebarAnimations: true,
})

const req = require.context('../src/stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

const styles = {
  paddingTop: '20px',
  display: 'flex',
  justifyContent: 'center'
}

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
)

storybook.addDecorator(withKnobs)
storybook.addDecorator(CenterDecorator)
storybook.configure(loadStories, module)
