import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { withLoader } from './index'

describe('withLoader', () => {
  const App = (props) => (<div>Content</div>)
  const AppWithLoading = withLoader(App)
  const wrapper = shallow(<AppWithLoading isFetching={false} />)
  const isFetchingWrapper = shallow(<AppWithLoading isFetching={true} />)

  it('should render loading message when isFetching', () => {
    expect(toJson(isFetchingWrapper)).toMatchSnapshot()
  })

  it('should render content when isFetching is false', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
