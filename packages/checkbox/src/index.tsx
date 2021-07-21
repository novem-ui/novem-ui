import React, { HTMLProps, Ref, useEffect, useMemo, useRef } from 'react'
import mergeRefs from 'merge-refs'
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

const Checkbox = (
  { baseColor, indeterminate, checked, ...checkboxProps }: CheckboxProps,
  ref: Ref<HTMLInputElement>
): JSX.Element => {
  const { props, spacingProps } = useMemo(() => separateSpacingProps<typeof checkboxProps>(checkboxProps), [
    checkboxProps
  ])
  const checkboxRef = useRef<HTMLInputElement>(null)
  const internalCheckboxRef = useMemo(() => mergeRefs(checkboxRef, ref), [checkboxRef, ref])

  useEffect(() => {
    checkboxRef.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <CheckboxLabel {...spacingProps}>
      <HiddenInput {...props} ref={internalCheckboxRef} type="checkbox" baseColor={baseColor} checked={checked} />
      <CheckboxElement baseColor={baseColor} />
      <Check className="checkbox-icon-check" {...iconProps} />
      <Minus className="checkbox-icon-minus" {...iconProps} />
    </CheckboxLabel>
  )
}

export default React.forwardRef<HTMLInputElement, CheckboxProps>(Checkbox)
