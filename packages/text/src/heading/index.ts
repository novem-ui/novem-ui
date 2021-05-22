import styled from '@emotion/styled'
import { Theme } from '@novem-ui/theme'
import { HeadingTags, typography, TypographyProps } from '@novem-ui/base/typography'
import { spacing, SpacingProps } from '@novem-ui/base/spacing'

export type HeadingProps = TypographyProps<HeadingTags, Theme['typography']['headingFontSizes']>

const Heading = styled.h1<HeadingProps & SpacingProps>`
  ${(props) => typography<HeadingTags, Theme['typography']['headingFontSizes']>(props, 'heading')}
  ${spacing}
`

export default Heading
