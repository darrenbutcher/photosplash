import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Search from './index'

describe('Search', () => {
  const wrapper = shallow(<Search />)
  
  it('should render properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
