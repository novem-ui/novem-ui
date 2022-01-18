import React from 'react'

import Button from '@novem-ui/button'
import { withTheme } from '@novem-ui/theme'
import { cleanup, render } from '@testing-library/react'

import Message from '.'

const setup = (mockData = {}) => {
  const mock = {
    title: 'dummy title',
    message: 'dummy message',
    onClose: jest.fn(),
    action: (
      <Button hierarchy="link" size="sm" onClick={() => true}>
        Dummy button
      </Button>
    )
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
})
