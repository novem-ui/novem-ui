import React from 'react'
import { render } from '@testing-library/react'
import styled from '@emotion/styled'
import theme from '@novem-ui/theme'

import shadow, { ShadowProps } from '.'

const ComponentWithShadow = styled.div<ShadowProps>`
  ${shadow}
`

describe('shadows', () => {
  test("should return nothing if there's no shadow value", () => {
    const { container } = render(<ComponentWithShadow theme={theme} />)

    expect(container).toMatchSnapshot()
  })

  test('should render a component with a small shadow', () => {
    const { container } = render(<ComponentWithShadow theme={theme} shadow="sm" />)

    expect(container).toMatchSnapshot()
  })
})
