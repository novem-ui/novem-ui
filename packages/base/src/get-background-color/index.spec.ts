import theme from '@novem-ui/theme'
import getBackgroundColor from '.'

describe('getBackgroundColor', () => {
  test('should return the correct value depending on the hierarchy', () => {
    const loud = getBackgroundColor({ theme, hierarchy: 'loud' })
    const quiet = getBackgroundColor({ theme, hierarchy: 'quiet' })
    const link = getBackgroundColor({ theme, hierarchy: 'link' })

    expect(loud).toEqual(theme.colors.palette.orange[500])
    expect(quiet).toEqual(theme.colors.palette.orange[100])
    expect(link).toEqual('transparent')
  })
})
