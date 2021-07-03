import React, { PropsWithRef } from 'react'

import { act, render, screen, waitFor } from '@testing-library/react'
import { matchers } from '@emotion/jest'
import { NovemProvider } from '@novem-ui/core'
import userEvent from '@testing-library/user-event'

import TextField, { TextFieldProps } from '.'

beforeAll(() => {
  expect.extend(matchers)
})

const setup = (props: PropsWithRef<TextFieldProps> = {}) => {
  const innerProps = { onChange: () => null, ...props }
  const result = render(
    <NovemProvider>
      <TextField {...innerProps} />
    </NovemProvider>
  )

  return result
}

describe('input/text-field', () => {
  test('should render a TextField', () => {
    const { container } = setup({ value: 'Default value' })

    expect(container).toMatchSnapshot()
  })

  test('should render a TextField with label', () => {
    const { container } = setup({ value: 'Default value', label: 'TextField Label' })

    expect(container).toMatchSnapshot()
  })

  test('should render a TextField with error', () => {
    const { container } = setup({ value: 'Default value', error: new Error('error message') })

    expect(container).toMatchSnapshot()
  })

  test('should render a TextField with a char counter', () => {
    const { container } = setup({ value: 'Default value', count: true })

    expect(container).toMatchSnapshot()
    expect(screen.queryByText('13')).toBeInTheDocument()
  })

  test('should update the char counter on change', async () => {
    const onChange = jest.fn()
    const { container } = setup({
      label: 'Input element',
      value: 'value',
      count: true,
      onChange
    })

    expect(screen.queryByText('5')).toBeInTheDocument()

    act(() => userEvent.type(container.querySelector('input'), 'valuee'))

    await waitFor(() => expect(screen.queryByText('6')).toBeInTheDocument())

    await waitFor(() => expect(onChange).toBeCalled())
  })

  test('should render a TextField with a limit', () => {
    const { container } = setup({ value: 'value', maxLength: 10 })

    expect(container).toMatchSnapshot()
    expect(screen.queryByText('5/10')).toBeInTheDocument()
  })

  test('should render a TextField with a helper', () => {
    const { container } = setup({ value: 'value', helper: 'This is a helper text' })

    expect(container).toMatchSnapshot()
    expect(screen.queryByText('This is a helper text')).toBeInTheDocument()
  })

  test('should render a TextField with an error message (from string)', () => {
    const { container } = setup({ value: 'value', error: 'This is an error message' })

    expect(container).toMatchSnapshot()
    expect(screen.queryByText('This is an error message')).toBeInTheDocument()
  })

  test('should render a TextField with an error message (from error object)', () => {
    const { container } = setup({ value: 'value', error: new Error('This is an error message') })

    expect(container).toMatchSnapshot()
    expect(screen.queryByText('This is an error message')).toBeInTheDocument()
  })

  test('should render a TextField with a valid state', () => {
    const { container } = setup({ value: 'value', valid: true })

    expect(container).toMatchSnapshot()
  })

  test('should render a disabled TextField', () => {
    const { container } = setup({ value: 'value', disabled: true })

    expect(container).toMatchSnapshot()
  })
})
