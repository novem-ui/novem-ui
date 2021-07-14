import React from 'react'

import withTheme from '@novem-ui/theme/src/utils/with-theme'
import { cleanup, fireEvent, render } from '@testing-library/react'

import Message from '.'

const setup = (mockData = {}) => {
  const mock = {
    title: 'dummy title',
    message: 'dummy message',
    onClose: jest.fn(),
    button: {
      text: 'dummy button',
      action: jest.fn()
    }
  }

  const Component = () => <Message {...mock} {...mockData} />

  const WrapperComponent = withTheme(Component)

  return render(<WrapperComponent />)
}

describe('<Message />', () => {
  test('should match snapshot with different baseColors', () => {
    const variants = ['orange', 'red', 'yellow', 'green']

    variants.forEach((variant) => {
      const { container } = setup({
        baseColor: variant
      })

      expect(container).toMatchSnapshot()

      cleanup()
    })
  })

  test('should not render title if prop is null', () => {
    const mockData = {
      title: null
    }
    const { container } = setup(mockData)

    expect(container).toMatchSnapshot()
  })

  test('should call onClick action function when button is clicked', () => {
    const actionMock = jest.fn()
    const mockData = {
      button: {
        text: 'dummy button',
        action: actionMock
      }
    }
    const { getByText } = setup(mockData)
    const button = getByText('dummy button')

    fireEvent.click(button)

    expect(actionMock).toHaveBeenCalled()
  })
})
