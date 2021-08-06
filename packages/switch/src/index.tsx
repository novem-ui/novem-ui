import React, { HTMLProps, Ref, useMemo } from 'react'
import { separateSpacingProps, SolidColorWithHierarchyProps, SpacingProps } from '@novem-ui/base'

import HiddenInput from './hidden-input'
import SwitchElement from './switch-element'
import SwitchLabel from './switch-label'

export type SwitchProps = Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> &
  Omit<SolidColorWithHierarchyProps, 'hierarchy' | 'theme'> &
  SpacingProps

const Switch = (props: SwitchProps, ref: Ref<HTMLInputElement>) => {
  const { props: inputProps, spacingProps } = useMemo(() => separateSpacingProps<typeof props>(props), [props])

  return (
    <SwitchLabel {...spacingProps}>
      <HiddenInput {...inputProps} type="checkbox" ref={ref} />
      <SwitchElement />
    </SwitchLabel>
  )
}

export default React.forwardRef<HTMLInputElement, SwitchProps>(Switch)
