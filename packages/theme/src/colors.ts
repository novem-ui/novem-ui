import createColorMap from './utils/create-color-map'

export type Colors = typeof colors

// colors to generate palettes
const baseOrange = '#F1694B'
const baseGreen = '#59BC6F'
const baseRed = '#EB5757'
const baseGrey = '#9A9897'
const baseYellow = '#FF9900'

// single colors
const darkGrey = '#1F1A18'
const gray25 = 'rgba(0, 0, 0, .25)'

// disabled colors
const disabledGrey = 'rgba(31, 26, 24, 0.08)'
const disabledGreyFont = 'rgba(31, 26, 24, 0.25)'
const disabled = {
  background: {
    link: 'transparent',
    loud: disabledGrey,
    quiet: disabledGrey
  },
  fontColor: disabledGreyFont
}

const base = 'orange' as keyof typeof palette

const palette = {
  orange: createColorMap(baseOrange),
  green: createColorMap(baseGreen),
  red: createColorMap(baseRed),
  yellow: createColorMap(baseYellow),
  grey: createColorMap(baseGrey)
}

const colors = {
  disabled,
  palette,
  darkGrey,
  gray25,
  base
}

export default colors
