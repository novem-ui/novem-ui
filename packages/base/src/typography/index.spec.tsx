import React from 'react'

import { render } from '@testing-library/react'
import styled from '@emotion/styled'
import theme, { Theme } from '@novem-ui/theme'

import typography from '.'
import { TypographyProps } from '../types'

describe('typography', () => {
  test('should create a css fragment with the mapped props (partial)', () => {
    type Sizes = keyof Theme['typography']['headingFontSizes']
    type HeadingProps = TypographyProps<'h1', Sizes>

    const ComponentWithTypographyProps = styled.h1<HeadingProps>`
      ${(props) => typography<'h1', Sizes>(props, 'heading')}
    `
    const { container } = render(
      <ComponentWithTypographyProps theme={theme} color="red.500" family="sans-serif">
        test
      </ComponentWithTypographyProps>
    )

    expect(container).toMatchSnapshot()
  })

  test('should create a css fragment with the mapped props (partial with size)', () => {
    type ParagraphProps = TypographyProps<'p', keyof Theme['typography']['textFontSizes']>

    const ComponentWithTypographyProps = styled.p<ParagraphProps>`
      ${(props) => typography<'p', keyof Theme['typography']['textFontSizes']>(props, 'text')}
    `
    const { container } = render(
      <ComponentWithTypographyProps theme={theme} color="red.500" family="sans-serif" size="sm">
        test
      </ComponentWithTypographyProps>
    )

    expect(container).toMatchSnapshot()
  })

  test('should create a css fragment with the mapped props', () => {
    type ParagraphProps = TypographyProps<'p' | 'b', keyof Theme['typography']['textFontSizes']>

    const props: ParagraphProps = {
      align: 'right',
      as: 'b',
      color: 'yellow.500',
      decoration: 'dotted',
      direction: 'rtl',
      family: 'monospace',
      kerning: 'auto',
      letterSpacing: 'normal',
      lineHeight: 2,
      orientation: 'revert',
      transform: 'uppercase',
      size: 'xs',
      shadow: '1px 1px 2px black',
      stretch: 'extra-expanded',
      fontStyle: 'italic',
      variantCaps: 'small-caps',
      variantNumeric: 'slashed-zero',
      weight: 'bolder',
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      wordSpacing: 'unset',
      writingMode: 'sideways-lr'
    }

    const ComponentWithTypographyProps = styled.p<ParagraphProps>`
      ${(props) => typography<'p' | 'b', keyof Theme['typography']['textFontSizes']>(props, 'text')}
    `
    const { container } = render(
      <ComponentWithTypographyProps theme={theme} {...props}>
        test
      </ComponentWithTypographyProps>
    )

    expect(container).toMatchSnapshot()
  })
})
