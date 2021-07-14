import React from 'react'

import { render } from '@testing-library/react'
import { NovemProvider } from '@novem-ui/core'

import Checkbox, { CheckboxProps } from '.'

const setup = (props: CheckboxProps = {}) => {
  const result = render(
    <NovemProvider>
      <Checkbox {...props} />
    </NovemProvider>
  )
  return result
}

describe('<Checkbox />', () => {
  test('should render a checkbox component', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  test('should render a checkbox component (checked)', () => {
    const { container } = setup({ checked: true })
    expect(container).toMatchSnapshot()
  })

  test('should render a checkbox component (indeterminate)', () => {
    const { container } = setup({ indeterminate: true })
    expect(container).toMatchSnapshot()
  })

  test('should render a checkbox component (custom color)', () => {
    const { container } = setup({ baseColor: 'red' })
    expect(container).toMatchSnapshot()
  })
})
