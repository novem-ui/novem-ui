import React from 'react'
import { render } from '@testing-library/react'
import theme from '@novem-ui/theme'

import Paragraph from '.'

describe('components/Text/Paragraph', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(<Paragraph theme={theme} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
