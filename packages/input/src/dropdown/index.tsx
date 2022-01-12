/* eslint-disable eqeqeq */
import React, {
  ComponentType,
  FunctionComponent,
  HTMLProps,
  KeyboardEventHandler,
  PropsWithRef,
  useEffect,
  useRef,
  useState
} from 'react'
import styled from '@emotion/styled'

import { genericInput } from '@novem-ui/base'
import { Box } from '@novem-ui/layout'
import { BaseColor, ComponentBaseColorProvider } from '@novem-ui/theme'
import { Paragraph } from '@novem-ui/text'

import { nanoid } from 'nanoid'

import css from '@emotion/css'
import withWrappedInput, { WrapperProps } from '../with-wrapped-input'

import { DropdownProvider, useDropdownState } from './context'
import Arrow from './arrow'

export type DropdownProps = HTMLProps<HTMLSelectElement> &
  Omit<WrapperProps, 'maxLenght' | 'count' | 'valid'> & {
    baseColor?: BaseColor
    disabled?: boolean
  }

interface StyleWrapperProps {
  disabled?: boolean
  error?: DropdownProps['error']
  baseColor?: BaseColor
  isOpen: boolean
}

const StyleWrapper = styled.div<StyleWrapperProps>`
  align-items: center;
  appearance: none;
  display: flex;
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing[2]}rem;
  padding-bottom: ${({ theme }) => theme.spacing[2]}rem;
  position: relative;
  user-select: none;

  select {
    display: none;
  }

  ${genericInput};
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.palette.grey['100']};
      cursor: not-allowed;
      pointer-events: none;
    `};
`

const InnerDropdown: FunctionComponent<DropdownProps> = ({ children, baseColor, className = '', ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state] = useDropdownState()
  const componentId = useRef(nanoid())
  const selectRef = useRef<HTMLSelectElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const selectedOption = state.selected || state.options[0]

  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement
    const targetId = target?.getAttribute('data-component-id')
    if (!(targetId === componentId.current)) {
      setIsOpen(false)
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  /* istanbul ignore next */
  const handleSelectKeypress: KeyboardEventHandler = (event) => {
    event.preventDefault()
    const shouldOpen = ['Enter', 'Space'].includes(event.code) && !isOpen
    console.log({ event })

    if (shouldOpen) {
      setIsOpen(true)
      listRef.current?.focus()
    }
  }

  /* istanbul ignore next */
  const handleListKeypress: KeyboardEventHandler = (event) => {
    const shouldClose = event.code == 'Escape' && isOpen

    if (shouldClose) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', closeDropdown)

    return () => {
      window.removeEventListener('click', closeDropdown)
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    /* istanbul ignore next */
    if (selectRef.current) {
      const changeEvent = new Event('change', { bubbles: true })
      selectRef.current.dispatchEvent(changeEvent)
    }
  }, [state.selected])

  // TODO: enhance accesibility
  // TODO: some events will not be mapped to the input component, fix that

  return (
    <StyleWrapper
      disabled={props.disabled}
      error={props.error}
      baseColor={baseColor}
      className={className}
      data-component-id={componentId.current}
      onClick={toggleDropdown}
      onKeyPress={handleSelectKeypress}
      isOpen={isOpen}
      tabIndex={0}
      role="dropdown"
    >
      <select ref={selectRef} {...props}>
        {state.options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.children}
          </option>
        ))}
      </select>
      <Arrow error={props.error} disabled={props.disabled} isOpen={isOpen} />
      <Paragraph data-novem-type="dropdown-value-text">{selectedOption?.children}</Paragraph>
      {children && (
        <Box
          backgroundColor="#fefdfd"
          borderRadius="1rem"
          left="0"
          top={14}
          position="absolute"
          shadow="md"
          width="100%"
          style={{
            // TODO: add overflow props to layout
            overflow: 'hidden',
            overflowY: 'scroll'
          }}
          maxHeight={36}
          display={isOpen ? 'block' : 'none'}
        >
          {/* TODO: create list component */}
          <ul
            style={{ listStyle: 'none', margin: 0, padding: 0 }}
            role="listbox"
            tabIndex={0}
            onKeyPress={handleListKeypress}
            ref={listRef}
          >
            {children}
          </ul>
        </Box>
      )}
    </StyleWrapper>
  )
}

const WrappedDropdown: FunctionComponent<PropsWithRef<DropdownProps>> = (props) => {
  return (
    <DropdownProvider selected={(props.value || props.defaultValue) as string}>
      <ComponentBaseColorProvider value={props.baseColor}>
        <InnerDropdown {...props} />
      </ComponentBaseColorProvider>
    </DropdownProvider>
  )
}

export default withWrappedInput(WrappedDropdown, true) as ComponentType<PropsWithRef<DropdownProps>>
export { Option, OptionProps } from './option'
