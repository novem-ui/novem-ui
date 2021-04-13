import * as React from 'react'

import { render } from '@testing-library/react'

import Badge from '.'

describe('<Badge />',() => {
  test('should match snapshot', () => {
    const { container } = render(
      <Badge variant="primary">Dummy text</Badge>
    )

    expect(container).toMatchSnapshot();
  })
})

