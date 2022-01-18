import React from 'react'

import theme, { withTheme } from '@novem-ui/theme'
import { render } from '@testing-library/react'

import { Container } from '.'

describe('<Container />', () => {
  test('should match snapshot (default)', () => {
    const Component = () => (
      <Container display="block" border="1px solid" borderColor="red.800" shadow="sm">
        Dummy text
      </Container>
    )
    const WrappedComponent = withTheme(Component, theme)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (fluid)', () => {
    const Component = () => (
      <Container display="block" border="1px solid" borderColor="red.800" shadow="sm" fluid>
        Dummy text
      </Container>
    )
    const WrappedComponent = withTheme(Component, theme)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })
})
