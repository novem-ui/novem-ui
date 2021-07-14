import React from 'react'

import { render } from '@testing-library/react'
import { NovemProvider } from '@novem-ui/core'

import Switch, { SwitchProps } from '.'

const setup = (props: SwitchProps = {}) => {
  const result = render(
    <NovemProvider>
      <Switch {...props} />
    </NovemProvider>
  )
  return result
}

describe('<Switch />', () => {
  test('should render a switch component', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  test('should render a switch component (checked)', () => {
    const { container } = setup({ checked: true })
    expect(container).toMatchSnapshot()
  })

  test('should render a switch component (custom color)', () => {
    const { container } = setup({ baseColor: 'red' })
    expect(container).toMatchSnapshot()
  })

  test('should render a badge component (disabled)', () => {
    const { container } = setup({ disabled: true })
    expect(container).toMatchSnapshot()
  })
})
