import React from 'react'

import { withTheme } from '@novem-ui/theme'
import { render } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  test('should match snapshot (default)', () => {
    const Component = () => <Button>Dummy text</Button>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (medium)', () => {
    const Component = () => <Button size="md">Dummy text</Button>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (small)', () => {
    const Component = () => <Button size="sm">Dummy text</Button>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (large)', () => {
    const Component = () => <Button size="lg">Dummy text</Button>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (quiet)', () => {
    const Component = () => <Button hierarchy="quiet">Dummy text</Button>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (alternative color)', () => {
    const Component = () => <Button baseColor="green">Dummy text</Button>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (alternative color)', () => {
    const Component = () => <Button disabled>Dummy text</Button>
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })
})
