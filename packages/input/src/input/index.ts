import styled from '@emotion/styled'

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray25};
  border-radius: ${({ theme }) => theme.spacing['4']}rem;
  box-sizing: border-box;
  height: ${({ theme }) => theme.spacing['12']}rem;
  font-size: ${({ theme }) => theme.typography.textFontSizes.md}px;
  padding: ${({ theme }) => theme.spacing['4']}rem;
  transition: border ease-in 0.25s;

  &:focus,
  &:hover {
    outline: unset;
    border-color: ${({
      theme: {
        colors: { palette, base }
      }
    }) => palette[base][500]};
    box-shadow: 0 2px 4px 0
      ${({
        theme: {
          colors: { palette, base }
        }
      }) => palette[base][100]};
  }
`

export default Input
