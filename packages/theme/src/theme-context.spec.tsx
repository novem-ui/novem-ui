import React from 'react'
import { render } from '@testing-library/react'

import theme, { Theme } from '..'
import ThemeContext from './theme-provider'

// TODO: do proper testing, not only snapshots

function setup(theme?: Theme) {
  return render(<ThemeContext theme={theme}></ThemeContext>)
}

describe('<ThemeContext />', () => {
  test('should use the passed theme', () => {
    const { asFragment } = setup(theme)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should use the passed theme', () => {
    const { asFragment } = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
