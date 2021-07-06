import React from 'react'

import { render } from '@testing-library/react'
import styled from '@emotion/styled'

import theme from '@novem-ui/theme'
import spacing from '.'
import type { SpacingProps } from '../types'

const ComponentWithSpacingProps = styled.div<SpacingProps>`
  ${spacing}
`

describe('spacing', () => {
  test('should create a css fragment with the mapped props (partial)', () => {
    const { container } = render(<ComponentWithSpacingProps theme={theme} margin={10} py={4} />)

    expect(container).toMatchSnapshot()
  })

  test('should create a css fragment with the mapped props (including all props)', () => {
    const props: SpacingProps = {
      m: 1,
      mb: '12',
      ml: '1',
      mr: 32,
      mt: '1px',
      mx: 3,
      my: 2,
      p: 2,
      pb: '12',
      pl: '1',
      pr: 32,
      pt: '1px',
      px: 3,
      py: 2
    }

    const { container } = render(<ComponentWithSpacingProps theme={theme} {...props} />)

    expect(container).toMatchSnapshot()
  })
})
