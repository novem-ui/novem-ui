import SpacingUtils from './spacing-utils'
import { SpacingPropEntry } from '../types'

describe('SpacingUtils::filterSpacingProps', () => {
  test('should remove unrequired props', () => {
    const props: any = { m: 1, anyProp: '' }
    const filtered = SpacingUtils.filterProps(props)

    expect(filtered).toEqual({ m: 1 })
  })
})

describe('SpacingUtils::validateSpacingPropValue', () => {
  test('should fail with an invalid value', () => {
    const value: SpacingPropEntry = ['m', '0c']

    expect(() => SpacingUtils.validatePropValue(value)).toThrow(
      'm property expected a number or a value expressed in CSS units but got 0c instead'
    )
  })

  test('should return the received tuple if value is null or undefined', () => {
    const value: SpacingPropEntry = ['m', null]
    const returnedValue = SpacingUtils.validatePropValue(value as any)

    expect(value).toEqual(returnedValue)
  })

  test('should return the parsed value if it is a number', () => {
    const value: SpacingPropEntry = ['m', '5']
    const returnedValue = SpacingUtils.validatePropValue(value as any)

    expect(returnedValue).toEqual(['m', 5])
  })

  test('should return the received tuple if the value is a valid css unit', () => {
    const value: SpacingPropEntry = ['m', '5px']
    const returnedValue = SpacingUtils.validatePropValue(value as any)

    expect(value).toEqual(returnedValue)
  })
})

describe('SpacingUtils::validateSpacingProps', () => {
  test('should validate the passed props correctly', () => {
    const props: any = { m: 1, anyProp: '', disabled: true, px: '1rem' }
    const validated = SpacingUtils.validateProps(props)

    expect(validated).toEqual({ margin: 1, paddingX: '1rem' })
  })

  test('should validate the passed props and throw an error', () => {
    const props: any = { m: 1, anyProp: '', disabled: true, px: '1re' }

    expect(() => SpacingUtils.validateProps(props)).toThrow()
  })

  test('should validate the passed props and transform the margin value', () => {
    const props: any = { margin: '1' }
    const validated = SpacingUtils.validateProps(props)

    expect(validated).toEqual({ margin: 1 })
  })
})
