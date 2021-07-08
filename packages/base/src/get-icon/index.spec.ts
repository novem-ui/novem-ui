import getIcon from '.'

describe('get-icon', () => {
  test('should return error icon', () => {
    const icon = getIcon({ error: true })

    expect(icon).toMatchSnapshot()
  })

  test('should return valid icon', () => {
    const icon = getIcon({ valid: true })

    expect(icon).toMatchSnapshot()
  })

  test('should return null', () => {
    const icon = getIcon({})

    expect(icon).toBeNull()
  })
})
