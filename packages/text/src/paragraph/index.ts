import styled from '@emotion/styled'
import { Theme } from '@novem-ui/theme'
import { typography, TypographyProps } from '@novem-ui/base/typography'
import { spacing, SpacingProps } from '@novem-ui/base/spacing'

type ParagraphTags = 'p' | 'strong' | 'span' | 'mark' | 'ins' | 'del' | 'sup' | 'small' | 'i' | 'b'

export type ParagraphProps = TypographyProps<ParagraphTags, keyof Theme['typography']['textFontSizes']>

const Paragraph = styled.p<ParagraphProps & SpacingProps>`
  ${(props) => typography<ParagraphTags, Theme['typography']['textFontSizes']>(props, 'text')}
  ${spacing}
`

export default Paragraph
