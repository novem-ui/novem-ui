import React from 'react'

import theme, { withTheme } from '@novem-ui/theme'
import { render } from '@testing-library/react'

import Badge from '.'

describe('<Badge />', () => {
  test('should match snapshot (default)', () => {
    const Component = () => <Badge>Dummy text</Badge>
    const WrappedComponent = withTheme(Component, theme)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (small)', () => {
    const Component = () => <Badge size="sm">Dummy text</Badge>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (quiet)', () => {
    const Component = () => <Badge hierarchy="quiet">Dummy text</Badge>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (alternative color)', () => {
    const Component = () => <Badge baseColor="green">Dummy text</Badge>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })
})
