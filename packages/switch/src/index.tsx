import React, { HTMLProps, useMemo, VoidFunctionComponent } from 'react'
import { separateSpacingProps, SolidColorWithHierarchyProps, SpacingProps } from '@novem-ui/base'

import HiddenInput from './hidden-input'
import SwitchElement from './switch-element'
import SwitchLabel from './switch-label'

export type SwitchProps = Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> &
  Omit<SolidColorWithHierarchyProps, 'hierarchy' | 'theme'> &
  SpacingProps

const Switch: VoidFunctionComponent<SwitchProps> = ({ baseColor, ...inputProps }) => {
  const { props, spacingProps } = useMemo(() => separateSpacingProps<typeof inputProps>(inputProps), [inputProps])

  return (
    <SwitchLabel {...spacingProps}>
      <HiddenInput type="checkbox" {...props} />
      <SwitchElement baseColor={baseColor} />
    </SwitchLabel>
  )
}

export default Switch
