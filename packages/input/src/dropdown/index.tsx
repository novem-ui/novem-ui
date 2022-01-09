import { useEffect, useRef, useState } from 'react'
import { genericInput } from '@novem-ui/base'
import { Box } from '@novem-ui/layout'
import styled from '@emotion/styled'
import { nanoid } from 'nanoid'

const Wrapper = styled.div`
  appearance: none;
  position: relative;
  flex: 1;
  ${genericInput};
  padding-top: ${({ theme }) => theme.spacing[2]}rem;
  padding-bottom: ${({ theme }) => theme.spacing[2]}rem;
`

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const componentId = useRef(nanoid())

  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement
    const targetId = target?.getAttribute('data-component-id')
    if (!(targetId === componentId.current)) {
      setIsOpen(false)
    }
  }

  const toggleDropdown = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    window.addEventListener('click', closeDropdown)

    return () => {
      window.removeEventListener('click', closeDropdown)
      setIsOpen(false)
    }
  }, [])

  return (
    <Wrapper onClick={toggleDropdown} data-component-id={componentId.current}>
      {isOpen && (
        <Box
          width="100%"
          position="absolute"
          top={14}
          left="0"
          background="white"
          zIndex={10}
          border="1px solid"
          p={4}
          borderRadius="1rem"
        >
          {children}
        </Box>
      )}
    </Wrapper>
  )
}

export default Dropdown
