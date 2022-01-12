import React, { PropsWithRef } from 'react'

import { act, render, screen } from '@testing-library/react'
import { matchers } from '@emotion/jest'
import { NovemProvider } from '@novem-ui/core'

import Dropdown, { DropdownProps, Option } from '.'

jest.mock('nanoid', () => ({ nanoid: () => 'mocked-id' }))

beforeAll(() => {
  expect.extend(matchers)
})

const setup = (props: PropsWithRef<DropdownProps> = {}, noChildren?: boolean) => {
  const innerProps = { onChange: () => null, ...props }
  const result = render(
    <NovemProvider>
      <Dropdown {...innerProps}>
        {!noChildren && (
          <>
            <Option value="1">Opt 1</Option>
            <Option value="2">Opt 2</Option>
          </>
        )}
      </Dropdown>
    </NovemProvider>
  )

  return result
}

describe('input/dropdown', () => {
  test('should render a Dropdown', () => {
    const { container } = setup({ value: 'Default value' })

    expect(container).toMatchSnapshot()
  })

  test('should render a Dropdown without children', () => {
    const { container } = setup({ value: 'Default value' }, true)

    expect(container).toMatchSnapshot()
  })

  test('should render a Dropdown with label', () => {
    const { container } = setup({ value: '2', label: 'Dropdown Label' })

    expect(container).toMatchSnapshot()
  })

  test('should render a Dropdown with error', () => {
    const { container } = setup({ value: 'Default value', error: new Error('error message') })

    expect(container).toMatchSnapshot()
  })

  test('should render a Dropdown with a helper', () => {
    const { container } = setup({ value: 'value', helper: 'This is a helper text' })

    expect(container).toMatchSnapshot()
    expect(screen.queryByText('This is a helper text')).toBeInTheDocument()
  })

  test('should render a Dropdown with an error message (from string)', () => {
    const { container } = setup({ value: 'value', error: 'This is an error message' })

    expect(container).toMatchSnapshot()
    expect(screen.queryByText('This is an error message')).toBeInTheDocument()
  })

  test('should render a Dropdown with an error message (from error object)', () => {
    const { container } = setup({ value: 'value', error: new Error('This is an error message') })

    expect(container).toMatchSnapshot()
    expect(screen.queryByText('This is an error message')).toBeInTheDocument()
  })

  test('should render a disabled Dropdown', () => {
    const { container } = setup({ value: 'value', disabled: true })

    expect(container).toMatchSnapshot()
  })

  test('should render an open dropdown', async () => {
    const { container, findByRole } = setup({ defaultValue: 'value', disabled: true })

    const dropdown = await findByRole('dropdown')

    act(() => {
      dropdown.click()
    })

    const listbox = await findByRole('listbox')

    expect(listbox).toBeVisible()
    expect(container).toMatchSnapshot()
  })

  test('should open the dropdown and select an option', async () => {
    const { findByRole, findAllByRole } = setup({ value: 'value', disabled: true })

    const dropdown = await findByRole('dropdown')

    act(() => {
      dropdown.click()
    })

    const listbox = await findByRole('listbox')

    expect(listbox).toBeVisible()

    const options = await findAllByRole('option') // document.querySelectorAll('[role=option]')

    const option = options.find((el) => el.children[0].innerHTML === 'Opt 2')

    act(() => {
      option.click()
    })

    const valueDisplay = dropdown.querySelector('[data-novem-type="dropdown-value-text"]')

    expect(listbox).not.toBeVisible()
    expect(valueDisplay).toHaveTextContent('Opt 2')
  })

  /*  test('should open the dropdown with the keyboard', async () => {
    const { findByRole } = setup({ value: 'value', disabled: true })

    const dropdown = await findByRole('dropdown')

    act(() => {
      dropdown.focus()
      fireEvent.keyDown(dropdown, {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        charCode: 13
      })
    })

    expect(dropdown).toHaveFocus()
  }) */
})
