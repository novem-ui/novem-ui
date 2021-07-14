import React, { HTMLProps, useEffect, useMemo, useRef, VoidFunctionComponent } from 'react'
import { iconProps, separateSpacingProps, SolidColorWithHierarchyProps, SpacingProps } from '@novem-ui/base'
import { Check, Minus } from '@icon-park/react'

import HiddenInput from './hidden-input'
import CheckboxElement from './checkbox-element'
import CheckboxLabel from './checkbox-label'

export type CheckboxProps = Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> &
  Omit<SolidColorWithHierarchyProps, 'hierarchy' | 'theme'> &
  SpacingProps & {
    indeterminate?: boolean
  }

const Checkbox: VoidFunctionComponent<CheckboxProps> = ({ baseColor, indeterminate, checked, ...checkboxProps }) => {
  const { props, spacingProps } = useMemo(() => separateSpacingProps<typeof checkboxProps>(checkboxProps), [
    checkboxProps
  ])
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    checkboxRef.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <CheckboxLabel {...spacingProps}>
      <HiddenInput {...props} ref={checkboxRef} type="checkbox" baseColor={baseColor} checked={checked} />
      <CheckboxElement baseColor={baseColor} />
      <Check className="checkbox-icon-check" {...iconProps} />
      <Minus className="checkbox-icon-minus" {...iconProps} />
    </CheckboxLabel>
  )
}

export default Checkbox
