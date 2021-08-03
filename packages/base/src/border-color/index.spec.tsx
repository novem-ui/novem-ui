import React from 'react'

import { render } from '@testing-library/react'
import styled from '@emotion/styled'
import theme from '@novem-ui/theme'
import { matchers } from '@emotion/jest'

import borderColor, { BorderColorProps } from '.'

beforeAll(() => {
  expect.extend(matchers)
})

const ComponentWithBorder = styled.div<BorderColorProps>`
  ${borderColor}
`

describe('borderColor', () => {
  test('should return a component with the correct border color', () => {
    const { container } = render(<ComponentWithBorder theme={theme} />)

    expect(container).toMatchSnapshot()
  })

  test('should return a component with the borderColor', () => {
    const { container } = render(<ComponentWithBorder theme={theme} baseColor="green" />)

    expect(container).toMatchSnapshot()
  })
})
