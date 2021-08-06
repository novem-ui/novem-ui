import theme from '@novem-ui/theme'
import getColor from '.'

describe('getColor', () => {
  test('should return the correct value depending on the hierarchy', () => {
    const loud = getColor({ theme, hierarchy: 'loud' })
    const quiet = getColor({ theme, hierarchy: 'quiet' })
    const link = getColor({ theme, hierarchy: 'link' })
    const disabled = getColor({ theme, hierarchy: 'link', disabled: true })

    expect(loud).toEqual('#fff')
    expect(quiet).toEqual(theme.colors.palette.orange[500])
    expect(link).toEqual(theme.colors.palette.orange[500])
    expect(disabled).toEqual(theme.colors.disabled.fontColor)
  })
})
