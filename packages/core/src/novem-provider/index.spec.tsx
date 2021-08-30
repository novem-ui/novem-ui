import React from 'react'
import { render } from '@testing-library/react'
import theme from '@novem-ui/theme'

import NovemProvider from '.'

describe('<NovemProvider />', () => {
  test('should match snapshot', () => {
    const Component = () => (
      <NovemProvider>
        <p>children</p>
      </NovemProvider>
    )
    const { container } = render(<Component />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (with reset)', () => {
    const Component = () => (
      <NovemProvider reset>
        <p>children</p>
      </NovemProvider>
    )
    const { container } = render(<Component />)

    expect(container).toMatchSnapshot()
  })

  test('should match snapshot (with custom theme)', () => {
    const Component = () => (
      <NovemProvider theme={theme}>
        <p>children</p>
      </NovemProvider>
    )
    const { container } = render(<Component />)

    expect(container).toMatchSnapshot()
  })
})
