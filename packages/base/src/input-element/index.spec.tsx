import React from 'react'
import { render } from '@testing-library/react'
import styled from '@emotion/styled'
import theme from '@novem-ui/theme'

import inputElement from '.'

const ComponentWithBorderProps = styled.div`
  ${inputElement}
`

describe('spacing', () => {
  test('should create a css fragment the correct styles', () => {
    const { container } = render(<ComponentWithBorderProps theme={theme} />)

    expect(container).toMatchSnapshot()
  })

  test('should create a css fragment the correct styles (with custom color)', () => {
    const { container } = render(<ComponentWithBorderProps theme={theme} baseColor="red" />)

    expect(container).toMatchSnapshot()
  })
})
