import theme from '@novem-ui/theme'
import { getWeightedColorFromBase } from './get-color'

describe('getWeightedColorFromBase', () => {
  test('return color with custom baseColor', () => {
    const color = getWeightedColorFromBase({ theme, baseColor: 'green', weight: '500' })

    expect(color).toBe(theme.colors.palette.green['500'])
  })

  test('return color with default baseColor', () => {
    const color = getWeightedColorFromBase({ theme, weight: '500' })

    expect(color).toBe(theme.colors.palette.orange['500'])
  })
})
