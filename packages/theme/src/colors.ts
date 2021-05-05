import createColorMap from './utils/create-color-map'

export interface Colors {
  disabled: typeof disabled
  palette: typeof palette
  darkGrey: string
  base: keyof typeof palette
}

// colors to generate palettes
const baseOrange = '#F1694B'
const baseGreen = '#59BC6F'
const baseRed = '#EB5757'
const baseGrey = '#9A9897'
const baseYellow = '#FF9900'

// single colors
const darkGrey = '#1F1A18'

// disabled colors
const disabledGrey = 'rgba(31, 26, 24, 0.08)'
const disabledGreyFont = 'rgba(31, 26, 24, 0.25)'
const disabled = {
  background: {
    link: 'transparent',
    loud: disabledGrey,
    quiet: disabledGrey,
  },
  fontColor: disabledGreyFont,
}

const palette = {
  orange: createColorMap(baseOrange),
  green: createColorMap(baseGreen),
  red: createColorMap(baseRed),
  yellow: createColorMap(baseYellow),
  grey: createColorMap(baseGrey),
}

const colors: Colors = {
  disabled,
  palette,
  darkGrey,
  base: 'orange',
}

export default colors
