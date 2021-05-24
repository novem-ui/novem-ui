import { SpacingValue } from '@novem-ui/theme'

import { units } from './constants'
import { SpacingPropEntry, SpacingProps, CSSSpacingProps } from '../types'

class SpacingUtils {
  /**
   * Receives an object with props and returns an object with the required props for setting the spacing
   */
  static filterProps = ({
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  }: SpacingProps & Record<any, any>): SpacingProps => ({
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  })

  /**
   * Receives a tuple of the type SpacingPropsEntry
   * @returns a tuple with the name of the css property and the value
   */
  static validatePropValue = ([name, value]: SpacingPropEntry): SpacingPropEntry => {
    const hasValue = typeof value !== 'undefined' && value !== null

    if (!hasValue) {
      return [name, value]
    }

    const valueParsedToNumber = Number(value)
    const isNumber = !Number.isNaN(valueParsedToNumber)

    if (isNumber) {
      return [name, valueParsedToNumber as SpacingValue]
    }

    const isValidCSSUnit = typeof value === 'string' && units.some((unit) => (value as string).endsWith(unit))

    if (isValidCSSUnit) {
      return [name, value]
    }

    throw new TypeError(`${name} property expected a number or a value expressed in CSS units but got ${value} instead`)
  }

  /**
   * Receives a list of props and returns a CleanSpacingProps object
   */
  static validateProps = (props: SpacingProps): CSSSpacingProps => {
    const filteredProps = SpacingUtils.filterProps(props)
    const validatedProps = Object.entries(filteredProps)
      .map(SpacingUtils.validatePropValue)
      .reduce((collector, [prop, value]) => {
        const cloned = { ...collector }
        cloned[prop] = value
        return cloned
      }, {} as SpacingProps)

    return JSON.parse(
      JSON.stringify({
        padding: validatedProps.p || validatedProps.padding,
        paddingX: validatedProps.px || validatedProps.paddingX,
        paddingY: validatedProps.py || validatedProps.paddingY,
        paddingTop: validatedProps.pt || validatedProps.paddingTop,
        paddingRight: validatedProps.pr || validatedProps.paddingRight,
        paddingBottom: validatedProps.pb || validatedProps.paddingBottom,
        paddingLeft: validatedProps.pl || validatedProps.paddingLeft,
        margin: validatedProps.m || validatedProps.margin,
        marginX: validatedProps.mx || validatedProps.marginX,
        marginY: validatedProps.my || validatedProps.marginY,
        marginTop: validatedProps.mt || validatedProps.marginTop,
        marginRight: validatedProps.mr || validatedProps.marginRight,
        marginBottom: validatedProps.mb || validatedProps.marginBottom,
        marginLeft: validatedProps.ml || validatedProps.marginLeft
      })
    )
  }
}

export default SpacingUtils
