import React from 'react'

import { render } from '@testing-library/react'
import styled from '@emotion/styled'
import { matchers } from '@emotion/jest'

import flex from '.'

import type { FlexProps } from '../types'

beforeAll(() => {
  expect.extend(matchers)
})

const FlexComponent = styled.div<FlexProps>`
  ${flex}
`

describe('borderColor', () => {
  test('should return a component some flex props', () => {
    const { container } = render(<FlexComponent align="center" />)

    expect(container).toMatchSnapshot()
  })

  test('should return a component all the flex props', () => {
    const props: FlexProps = {
      align: 'center',
      justify: 'center',
      wrap: 'wrap',
      grow: 1,
      basis: 'max-content',
      direction: 'row',
      shrink: 'inherit'
    }
    const { container } = render(<FlexComponent {...props} />)

    expect(container).toMatchSnapshot()
  })
})
