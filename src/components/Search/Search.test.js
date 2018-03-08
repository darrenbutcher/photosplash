import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Search from '.'

describe('Search', () => {
  const requiredProps = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
  }

  const preventDefault = jest.fn()

  const wrapper = shallow(
    <Search
      {...requiredProps} 
      />
  )

  it('should render properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should prevent default', () => {
    const form = wrapper.dive().find('Form')
    form.simulate('submit', { preventDefault })
    expect(preventDefault).toBeCalled()
  })
})
