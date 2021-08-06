import React from 'react'

import theme, { withTheme } from '@novem-ui/theme'
import { render } from '@testing-library/react'

import { Box } from '.'

describe('<Box />', () => {
  test('should match snapshot (default)', () => {
    const Component = () => (
      <Box display="block" border="1px solid" borderColor="red.800">
        Dummy text
      </Box>
    )
    const WrappedComponent = withTheme(Component, theme)
    const { container } = render(<WrappedComponent />)

    expect(container).toMatchSnapshot()
  })
})
