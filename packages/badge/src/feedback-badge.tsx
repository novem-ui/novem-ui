import React, { Ref, useMemo } from 'react'
import styled from '@emotion/styled'
import { Check, Close } from '@icon-park/react'
import { iconProps, layout, LayoutProps, spacing, SpacingProps } from '@novem-ui/base'

export type FeedbackBadgeProps = SpacingProps &
  Omit<LayoutProps, 'display'> & {
    variant: 'error' | 'success'
  }

const ColoredCircle = styled.div<FeedbackBadgeProps>`
  ${spacing}
  ${layout}
  align-items: center;
  display: flex;
  background-color: ${({ theme, variant }) => theme.colors.palette[variant === 'success' ? 'green' : 'red'][500]};
  border-radius: ${({ theme }) => theme.spacing[2.5]}rem;
  height: ${({ theme }) => theme.spacing[5]}rem;
  justify-content: center;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.spacing[5]}rem;

  .i-icon {
    display: flex;
  }
`

const FeedbackBadge = ({ variant, ...props }: FeedbackBadgeProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  const Icon = useMemo(() => (variant === 'success' ? Check : Close), [variant])

  return (
    <ColoredCircle variant={variant} {...props} ref={ref}>
      <Icon {...iconProps} />
    </ColoredCircle>
  )
}

export default React.forwardRef<HTMLDivElement, FeedbackBadgeProps>(FeedbackBadge)
