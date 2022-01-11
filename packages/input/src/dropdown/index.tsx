/* eslint-disable eqeqeq */
import { ComponentType, FunctionComponent, HTMLProps, KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'

import { genericInput, getColor } from '@novem-ui/base'
import { Box, Flex } from '@novem-ui/layout'
import { BaseColor, ComponentBaseColorProvider, useTheme } from '@novem-ui/theme'
import { Paragraph } from '@novem-ui/text'

import { Up } from '@icon-park/react'

import { nanoid } from 'nanoid'

import withWrappedInput, { WrapperProps } from '../with-wrapped-input'

import { DropdownProvider, useDropdownState } from './context'

export type DropdownProps = HTMLProps<HTMLSelectElement> & {
  baseColor?: BaseColor
}

const Wrapper = styled.div`
  align-items: center;
  appearance: none;
  display: flex;
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing[2]}rem;
  padding-bottom: ${({ theme }) => theme.spacing[2]}rem;
  position: relative;
  user-select: none;
  ${genericInput};

  select {
    display: none;
  }
`

const InnerDropdown: FunctionComponent<DropdownProps> = ({ children, baseColor, className = '', ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state] = useDropdownState()
  const componentId = useRef(nanoid())
  const theme = useTheme()
  const selectRef = useRef<HTMLSelectElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const color = getColor({ theme, baseColor })
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

  const handleSelectKeypress: KeyboardEventHandler = (event) => {
    event.preventDefault()
    const shouldOpen = ['Enter', 'Space'].includes(event.code) && !isOpen

    if (shouldOpen) {
      setIsOpen(true)
      listRef.current?.focus()
    }
  }

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
    if (selectRef.current) {
      const changeEvent = new Event('change', { bubbles: true })
      selectRef.current.dispatchEvent(changeEvent)
    }
  }, [state.selected])

  // TODO: enhance accesibility
  // TODO: some events will not be mapped to the input component, fix that

  return (
    <Wrapper
      baseColor={baseColor}
      className={className}
      data-component-id={componentId.current}
      onClick={toggleDropdown}
      onKeyPress={handleSelectKeypress}
      tabIndex={0}
    >
      <select ref={selectRef} {...props}>
        {state.options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.children}
          </option>
        ))}
      </select>
      <Flex
        align="center"
        position="absolute"
        right={4}
        height="100%"
        display="flex"
        justify="center"
        top="0"
        paddingTop={1}
        style={{
          // TODO: make an animation component and remove style prop
          transition: 'transform .25s ease',
          transform: isOpen ? '' : 'rotate(180deg)'
        }}
      >
        <Up theme="outline" size="24" fill={color} />
      </Flex>
      <Paragraph>{selectedOption?.children}</Paragraph>
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
    </Wrapper>
  )
}

const WrappedDropdown = (props) => {
  return (
    <DropdownProvider selected={props.value || props.defaultValue}>
      <ComponentBaseColorProvider value={props.baseColor}>
        <InnerDropdown {...props} />
      </ComponentBaseColorProvider>
    </DropdownProvider>
  )
}

export default withWrappedInput(WrappedDropdown) as ComponentType<
  DropdownProps & Omit<WrapperProps, 'maxLen' | 'count'>
>
export { Option } from './option'
