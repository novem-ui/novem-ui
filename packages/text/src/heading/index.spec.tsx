import React from 'react'
import { render } from '@testing-library/react'
import theme from '@novem-ui/theme'

import Heading from '.'

describe('components/Text/Heading', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(<Heading as="h2" theme={theme} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
