import React from 'react'

import theme, { withTheme } from '@novem-ui/theme'
import { render } from '@testing-library/react'

import { Flex } from '.'

describe('<Flex />', () => {
  test('should match snapshot (default)', () => {
    const Component = () => (
      <Flex border="1px solid" borderColor="red.800">
        Dummy text
      </Flex>
    )
    const WrappedComponent = withTheme(Component, theme)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (inline)', () => {
    const Component = () => (
      <Flex border="1px solid" borderColor="red.800" inline>
        Dummy text
      </Flex>
    )
    const WrappedComponent = withTheme(Component, theme)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })
})
