import React from 'react'

import withTheme from '@novem-ui/theme/src/utils/with-theme'
import { render } from '@testing-library/react'

import BaseStyle from '.'

describe('<BaseStyle />', () => {
  test('should match snapshot (default)', () => {
    const Component = () => <BaseStyle />
    const WrappedComponent = withTheme(Component)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })
})
