import React, { createContext, FunctionComponent, useContext } from 'react'
import { BaseColor } from '..'

export interface ComponentBaseColorProps {
  value: BaseColor
}

/**
 * A small context component to pass the custom baseColor prop to child components without prop-drilling
 */
const ComponentBaseColorContext = createContext('' as BaseColor)

/**
 * A small context component to pass the custom baseColor prop to child components without prop-drilling.
 *
 * Usage:
 * ```jsx
 * <ComponentBaseColorProvider value={customBaseColor}>
 *   <SomeChildComponent />
 * </ComponentBaseColorProvider>
 * ```
 */
export const ComponentBaseColorProvider: FunctionComponent<ComponentBaseColorProps> = ({ children, value }) => {
  return <ComponentBaseColorContext.Provider value={value}>{children}</ComponentBaseColorContext.Provider>
}

/**
 *
 * A small hook to consume the baseColor from the nearest parent component with a ComponentBaseColorProvider
 *
 * Usage:
 * ```js
 * const baseColor = useComponentBaseColor()
 * ```
 */
export const useComponentBaseColor = () => {
  const color = useContext(ComponentBaseColorContext) as BaseColor

  return color
}
