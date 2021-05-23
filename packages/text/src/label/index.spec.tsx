import React from 'react'
import { render } from '@testing-library/react'
import theme from '@novem-ui/theme'

import Label from '.'

describe('components/Text/Label', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(<Label theme={theme} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
