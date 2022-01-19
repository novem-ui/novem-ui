import React from 'react'
import { render } from '@testing-library/react'
import { NovemProvider } from '@novem-ui/core'

import { AvatarProps } from './types'
import Avatar from '.'

const setup = (props: AvatarProps = {}) => {
  const result = render(
    <NovemProvider>
      <Avatar {...props} />
    </NovemProvider>
  )
  return result
}

describe('components/Avatar', () => {
  test('should match snapshot (default)', () => {
    const { asFragment } = setup({ image: 'a', name: 'Person Name' })

    expect(asFragment()).toMatchSnapshot()
  })

  test('should match snapshot (sm)', () => {
    const { asFragment } = setup({ image: 'a', name: 'Person Name', size: 'sm' })

    expect(asFragment()).toMatchSnapshot()
  })

  test('should match snapshot (lg)', () => {
    const { asFragment } = setup({ image: 'a', name: 'Person Name', size: 'lg' })

    expect(asFragment()).toMatchSnapshot()
  })

  test('should match snapshot (with description)', () => {
    const { asFragment } = setup({ image: 'a', name: 'Person Name', size: 'lg', description: 'Job description' })

    expect(asFragment()).toMatchSnapshot()
  })

  test('should match snapshot (no image)', () => {
    const { asFragment } = setup({ name: 'Person Name', size: 'lg' })

    expect(asFragment()).toMatchSnapshot()
  })

  test('should match snapshot (no name)', () => {
    const { asFragment } = setup({ image: 'a', size: 'lg' })

    expect(asFragment()).toMatchSnapshot()
  })
})
