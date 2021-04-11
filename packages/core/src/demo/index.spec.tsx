import React from 'react'

import { render } from '@testing-library/react'

import DemoComponent from '.'

test('demo component', () => {
  const { container } = render(<DemoComponent text="demo" />)

  expect(container).toMatchSnapshot();
})
