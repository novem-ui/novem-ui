import React from 'react'

import { render } from '@testing-library/react'
import { NovemProvider, theme } from '@novem-ui/core'
import { matchers } from '@emotion/jest'

import BottomText, { BotttomTextProps } from '.'

beforeAll(() => {
  expect.extend(matchers)
})

const setup = (props: BotttomTextProps = {}) => {
  const { container } = render(
    <NovemProvider>
      <BottomText {...props} />
    </NovemProvider>
  )

  const paragraph = container.querySelector('p')

  return { container, paragraph }
}

describe('input/bottom-text', () => {
  test('should render a helper', () => {
    const { container, paragraph } = setup({ helper: 'Helper text' })

    expect(container).toMatchSnapshot()
    expect(paragraph).toHaveStyleRule('color', theme.colors.palette.grey[400])
  })

  test('should render an error message (from string)', () => {
    const { container, paragraph } = setup({ error: 'Error text' })

    expect(container).toMatchSnapshot()
    expect(paragraph).toHaveStyleRule('color', theme.colors.palette.red[500])
  })

  test('should render an error message (from object)', () => {
    const { container, paragraph } = setup({ error: new Error('Error text') })

    expect(container).toMatchSnapshot()
    expect(paragraph).toHaveStyleRule('color', theme.colors.palette.red[500])
  })

  test('should render nothing', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
