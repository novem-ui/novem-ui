import React from 'react'

import { render } from '@testing-library/react'
import { theme } from '@novem-ui/core'
import { matchers } from '@emotion/jest'

import InputWrapper, { InputWrapperProps } from '.'

beforeAll(() => {
  expect.extend(matchers)
})

const setup = (props: InputWrapperProps = {}) => {
  const { container } = render(<InputWrapper theme={theme} {...props} />)

  return { container }
}

describe('input/input', () => {
  test('should render an input wrapper with a valid state', () => {
    const { container } = setup({ valid: true })

    expect(container).toMatchSnapshot()
  })

  test('should render an input wrapper with an error state', () => {
    const { container } = setup({ error: true })

    expect(container).toMatchSnapshot()
  })

  test('should render an input wrapper with an disabled state', () => {
    const { container } = setup({ disabled: true })

    expect(container).toMatchSnapshot()
  })
})
