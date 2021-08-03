import React, { HTMLProps, useMemo, VoidFunctionComponent } from 'react'
import { separateSpacingProps, SolidColorWithHierarchyProps, SpacingProps } from '@novem-ui/base'

import HiddenInput from './hidden-input'
import SwitchElement from './switch-element'
import SwitchLabel from './switch-label'

export type SwitchProps = Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> &
  Omit<SolidColorWithHierarchyProps, 'hierarchy' | 'theme'> &
  SpacingProps

const Switch: VoidFunctionComponent<SwitchProps> = (props) => {
  const { props: inputProps, spacingProps } = useMemo(() => separateSpacingProps<typeof props>(props), [props])

  return (
    <SwitchLabel {...spacingProps}>
      <HiddenInput {...inputProps} type="checkbox" />
      <SwitchElement />
    </SwitchLabel>
  )
}

export default Switch
