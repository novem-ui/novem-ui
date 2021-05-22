import styled from '@emotion/styled'
import { Theme } from '@novem-ui/theme'
import { typography, TypographyProps } from '@novem-ui/base/typography'
import { spacing, SpacingProps } from '@novem-ui/base/spacing'

type ParagraphTags = 'p' | 'strong' | 'span' | 'mark' | 'ins' | 'del' | 'sup' | 'small' | 'i' | 'b'

export type ParagraphProps = TypographyProps<ParagraphTags, Theme['typography']['textFontSizes']>

const Paragraph = styled.h1<ParagraphProps & SpacingProps>`
  ${(props) => typography<ParagraphTags, Theme['typography']['textFontSizes']>(props, 'heading')}
  ${spacing}
`

export default Paragraph
