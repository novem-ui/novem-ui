import createColorMap from './utils/create-color-map'

// colors to generate palettes
const baseOrange = '#F1694B'
const baseGreen = '#59BC6F'
const baseRed = '#EB5757'
const baseGrey = '#9A9897'
const baseYellow = '#FF9900'

// single colors
const darkGrey = '#1F1A18'

const colors = {
  orange: createColorMap(baseOrange),
  green: createColorMap(baseGreen),
  red: createColorMap(baseRed),
  grey: createColorMap(baseGrey),
  yellow: createColorMap(baseYellow),
  darkGrey,
  base: 'orange',
}

export default colors
