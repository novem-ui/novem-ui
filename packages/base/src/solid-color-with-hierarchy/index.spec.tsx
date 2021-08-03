import React from 'react'

import { render } from '@testing-library/react'
import styled from '@emotion/styled'

import theme from '@novem-ui/theme'
import solidColorWithHierarchy, { SolidColorWithHierarchyProps } from '.'

const ComponentWithHierarchyProps = styled.div<SolidColorWithHierarchyProps>`
  ${solidColorWithHierarchy}
`

describe('solidColorWithHierarchy', () => {
  test('should return a component with the corresponding colors to loud', () => {
    const { container } = render(<ComponentWithHierarchyProps theme={theme} baseColor="red" hierarchy="loud" />)

    expect(container).toMatchSnapshot()
  })

  test('should return a component with the corresponding colors to quiet', () => {
    const { container } = render(<ComponentWithHierarchyProps theme={theme} baseColor="red" hierarchy="quiet" />)

    expect(container).toMatchSnapshot()
  })

  test('should return a component with the corresponding colors to link', () => {
    const { container } = render(<ComponentWithHierarchyProps theme={theme} baseColor="red" hierarchy="link" />)

    expect(container).toMatchSnapshot()
  })

  test('should read the baseColor from theme', () => {
    const { container } = render(<ComponentWithHierarchyProps theme={theme} hierarchy="loud" />)

    expect(container).toMatchSnapshot()
  })
})
