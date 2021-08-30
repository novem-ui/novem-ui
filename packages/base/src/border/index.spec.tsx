import React from 'react'

import { render } from '@testing-library/react'
import styled from '@emotion/styled'
import theme from '@novem-ui/theme'
import { matchers } from '@emotion/jest'

import { BorderProps } from '../types'

import border from '.'

beforeAll(() => {
  expect.extend(matchers)
})

const ComponentWithBorder = styled.div<BorderProps>`
  ${border}
`

describe('borderColor', () => {
  test('should return a component with the correct border color and 1px width', () => {
    const { container } = render(<ComponentWithBorder theme={theme} border="1px solid" borderColor="blue.500" />)

    expect(container).toMatchSnapshot()
  })

  test('should return a component with unmapped colors', () => {
    const { container } = render(
      <ComponentWithBorder theme={theme} borderColor="blu.e.500" borderBlockColor="violet" />
    )

    expect(container).toMatchSnapshot()
  })

  test('should return a component with all the props', () => {
    const { container } = render(
      <ComponentWithBorder
        theme={theme}
        border="1px solid"
        borderBlock="AppWorkspace"
        borderBlockColor="green.700"
        borderBlockEnd="unset"
        borderBlockEndColor="yellow.200"
        borderBlockEndStyle="outset"
        borderBlockEndWidth="thick"
        borderBlockStart="1px solid"
        borderBlockStartColor="indigo.700"
        borderBlockStartStyle="revert"
        borderBlockStartWidth="1px solid"
        borderBlockStyle="double"
        borderBlockWidth="1px solid"
        borderBottom="1px solid"
        borderBottomColor="indigo.700"
        borderBottomLeftRadius="1px solid"
        borderBottomRightRadius="1px solid"
        borderBottomStyle="hidden"
        borderBottomWidth="1px solid"
        borderCollapse="collapse"
        borderColor="indigo.700"
        borderEndEndRadius="inherit"
        borderEndStartRadius="unset"
        borderInline="1px solid"
        borderInlineColor="indigo.700"
        borderInlineEnd="antiquewhite"
        borderInlineEndColor="indigo.700"
        borderInlineEndStyle="initial"
        borderInlineEndWidth="initial"
        borderInlineStart="initial"
        borderInlineStartColor="indigo.700"
        borderInlineStartStyle="outset"
        borderInlineStartWidth="outset"
        borderInlineStyle="outset"
        borderInlineWidth="outset"
        borderLeft="outset"
        borderLeftColor="indigo.700"
        borderLeftStyle="outset"
        borderLeftWidth="outset"
        borderRadius="outset"
        borderRight="outset"
        borderRightColor="indigo.700"
        borderRightStyle="ridge"
        borderRightWidth="thick"
        borderSpacing="unset"
        borderStartEndRadius="1px"
        borderStartStartRadius="1px"
        borderStyle="hidden"
        borderTop="hidden"
        borderTopColor="indigo.700"
        borderTopLeftRadius="inherit"
        borderTopRightRadius="inherit"
        borderTopStyle="ridge"
        borderTopWidth="thin"
        borderWidth="inherit"
      />
    )

    expect(container).toMatchSnapshot()
  })
})
