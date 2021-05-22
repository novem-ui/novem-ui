import styled from '@emotion/styled'
import { Theme } from '@novem-ui/theme'
import { typography, TypographyProps } from '@novem-ui/base/typography'
import { spacing, SpacingProps } from '@novem-ui/base/spacing'

export type LabelProps = TypographyProps<'label', Theme['typography']['textFontSizes']>

const Label = styled.label<LabelProps & SpacingProps>`
  ${(props) => typography<'label', Theme['typography']['textFontSizes']>(props, 'text')}
  ${spacing}
`

export default Label
