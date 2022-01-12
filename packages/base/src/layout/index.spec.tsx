import React from 'react'

import { render } from '@testing-library/react'
import styled from '@emotion/styled'

import layout from '.'
import type { LayoutProps } from '../types'

const ComponentWithLayoutProps = styled.div<LayoutProps>`
  ${layout}
`

describe('layout', () => {
  test('should create a css fragment with the mapped props (partial)', () => {
    const { container } = render(<ComponentWithLayoutProps top="10px" />)

    expect(container).toMatchSnapshot()
  })

  test('should create a css fragment with the mapped props (including all props)', () => {
    const props: LayoutProps = {
      top: '10px',
      left: '10px',
      right: '10px',
      bottom: '10px',
      position: 'relative',
      display: 'flex',
      width: '10px',
      height: '10px',
      maxWidth: '100px',
      maxHeight: '50px',
      zIndex: 10
    }

    const { container } = render(<ComponentWithLayoutProps {...props} />)

    expect(container).toMatchSnapshot()
  })
})
