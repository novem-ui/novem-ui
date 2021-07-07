import styled from '@emotion/styled'
import { transparentize } from 'polished'

const SwitchElement = styled.span`
  background-color: ${({ theme }) => theme.colors.gray25};
  bottom: 0;
  cursor: pointer;
  left: 0;
  right: 0;
  box-sizing: border-box;
  top: 0;
  transition: all ease-in 0.25s;
  position: absolute;
  border-radius: ${({ theme }) => theme.spacing[2.5]}rem;
  padding: ${({ theme }) => theme.spacing[0.5]}rem;

  &::after {
    content: '';
    background-color: white;
    border-radius: ${({ theme }) => theme.spacing[2]}rem;
    display: block;
    height: ${({ theme }) => theme.spacing[4]}rem;
    transition: transform ease 0.25s;
    width: ${({ theme }) => theme.spacing[4]}rem;
    box-shadow: 0px 1px 2px 2px ${({ theme }) => transparentize(0.9, theme.colors.palette.grey[900])};
  }
`

export default SwitchElement
