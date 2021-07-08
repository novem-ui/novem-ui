import React, { HTMLProps, useEffect, useMemo, useRef, VoidFunctionComponent } from 'react'
import { separateSpacingProps, SolidColorWithHierarchyProps, SpacingProps } from '@novem-ui/base'

import HiddenInput from './hidden-input'
import CheckboxElement from './checkbox-element'
import CheckboxLabel from './checkbox-label'

export type CheckboxProps = Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> &
  Omit<SolidColorWithHierarchyProps, 'hierarchy' | 'theme'> &
  SpacingProps & {
    indeterminate?: boolean
  }

const Checkbox: VoidFunctionComponent<CheckboxProps> = ({ baseColor, indeterminate, ...checkboxProps }) => {
  const { props, spacingProps } = useMemo(() => separateSpacingProps<typeof checkboxProps>(checkboxProps), [
    checkboxProps
  ])
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    checkboxRef.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <CheckboxLabel {...spacingProps}>
      <HiddenInput ref={checkboxRef} type="checkbox" {...props} baseColor={baseColor} />
      <CheckboxElement baseColor={baseColor} />
    </CheckboxLabel>
  )
}

export default Checkbox
