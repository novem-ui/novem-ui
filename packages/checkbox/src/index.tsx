import React, { HTMLProps, useMemo, VoidFunctionComponent } from 'react'
import { separateSpacingProps, SolidColorWithHierarchyProps, SpacingProps } from '@novem-ui/base'

import HiddenInput from './hidden-input'
import CheckboxElement from './checkbox-element'
import CheckboxLabel from './checkbox-label'

export type CheckboxProps = Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> &
  Omit<SolidColorWithHierarchyProps, 'hierarchy' | 'theme'> &
  SpacingProps

const Checkbox: VoidFunctionComponent<CheckboxProps> = ({ baseColor, ...checkboxProps }) => {
  const { props, spacingProps } = useMemo(() => separateSpacingProps<typeof checkboxProps>(checkboxProps), [
    checkboxProps
  ])

  return (
    <CheckboxLabel {...spacingProps}>
      <HiddenInput type="checkbox" {...props} baseColor={baseColor} />
      <CheckboxElement baseColor={baseColor} />
    </CheckboxLabel>
  )
}

export default Checkbox
