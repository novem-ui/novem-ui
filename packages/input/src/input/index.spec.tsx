import React from 'react'

import { render } from '@testing-library/react'
import { theme } from '@novem-ui/core'
import { matchers } from '@emotion/jest'

import Input from '.'

beforeAll(() => {
  expect.extend(matchers)
})

const setup = () => {
  const { container } = render(<Input theme={theme} />)

  const paragraph = container.querySelector('p')

  return { container, paragraph }
}

describe('input/input', () => {
  test('should render a themed input', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
