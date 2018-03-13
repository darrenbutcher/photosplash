import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MediaCard from './index'

describe('MediaCard', () => {
  const image = 'https://someurl.dev/image'
  const title = 'The Title'
  const subtitle = 'Subtitle'
  const description = 'Description'
  const buttonText = 'Click me'
  const onClick = jest.fn()
  const body = jest.fn()

  it('should render a media item', () => {
    const wrapper = shallow(<MediaCard src={image} />)
    expect(wrapper.find('Image').props().src).toEqual(image)
  })

  it('should render a title', () => {
    const wrapper = shallow(<MediaCard src="" body={{ title }} />)
    expect(wrapper.find('CardHeader').props().children).toContain(title)
  })

  it('should render a subtitle', () => {
    const wrapper = shallow(<MediaCard src="" body={{ subtitle }}/>)
    expect(wrapper.find('CardMeta').props().children).toContain(subtitle)
  })

  it('should render a description', () => {
    const wrapper = shallow(<MediaCard src="" body={{ description }}/>)
    expect(wrapper.find('CardDescription').props().children).toContain(description)
  })

  it('should render a button', () => {
    const wrapper = shallow(
      <MediaCard
        src=""
        body={{ button: {
            text: buttonText,
            onClick
          } 
        }}
      />
    )

    expect(wrapper.find('Styled(Button)').props().children).toContain(buttonText)
  })

  it('should call onClick when button is clicked', () => {
    const wrapper = shallow(
      <MediaCard
        src=""
        body={{ button: {
            text: buttonText,
            onClick
          } 
        }}
      />
    )

    const button = wrapper.find('Styled(Button)')
    button.simulate('click')
    expect(onClick).toBeCalled()
  })

  it('should render a custom body', () => {
    const wrapper = shallow(<MediaCard src="" body={body}/>)
    expect(body).toBeCalled()
  })

  it('should render an empty body when no body prop', () => {
    const wrapper = shallow(<MediaCard src="" />)
    expect(wrapper.find('CardContent').children().text()).toContain('BodySpacer')
  })

  it('should render a default image when image empty', () => {
    const wrapper = shallow( <MediaCard src="" />)
    expect(wrapper.find('Image').props().src).not.toEqual("")
  })

  it('should default to an image type when type not set', () => {
    const wrapper = shallow( <MediaCard src="" />)
    expect(wrapper.find('Image').length).toBe(1)
  })
})
