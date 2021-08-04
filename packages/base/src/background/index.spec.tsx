import React from 'react'

import { render } from '@testing-library/react'
import styled from '@emotion/styled'

import theme from '@novem-ui/theme'
import background from '.'
import type { BackgroundProps } from '../types'

const ComponentWithBackgroundProps = styled.div<BackgroundProps>`
  ${background}
`

describe('layout', () => {
  test('should create a css fragment with the mapped props (partial)', () => {
    const { container } = render(<ComponentWithBackgroundProps theme={theme} backgroundClip="revert" />)

    expect(container).toMatchSnapshot()
  })

  test('should create a css fragment with the mapped props', () => {
    const props: BackgroundProps = {
      background: 'ThreeDFace',
      backgroundAttachment: 'initial',
      backgroundBlendMode: 'soft-light',
      backgroundClip: 'revert',
      backgroundColor: 'red.800',
      backgroundImage: 'url(image)',
      backgroundOrigin: 'inherit',
      backgroundPosition: 'right',
      backgroundPositionX: 'x-start',
      backgroundPositionY: 'y-end',
      backgroundRepeat: 'repeat-y',
      backgroundSize: 'unset'
    }
    const { container } = render(<ComponentWithBackgroundProps theme={theme} {...props} />)

    expect(container).toMatchSnapshot()
  })
})
