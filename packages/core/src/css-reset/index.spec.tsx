import React from 'react'

import withTheme from '@novem-ui/theme/src/utils/with-theme'
import { render } from '@testing-library/react'

import CSSReset from '.'

describe('<CSSReset />', () => {
  test('should match snapshot', () => {
    const Component = () => <CSSReset />
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })
})
