import React, { VoidFunctionComponent } from 'react'
import { Meta } from '@storybook/react'
import styled from '@emotion/styled'
import { getLuminance } from 'polished'

import colorList from './colors'
import { WeightedColor, WeightedColorKey } from '../types'

export default {
  title: 'Theme/Colors',
} as Meta

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

function hexify(color) {
  const values = color
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',')
  const a = parseFloat(values[3] || 1)
  const r = Math.floor(a * parseInt(values[0], 10) + (1 - a) * 255)
  const g = Math.floor(a * parseInt(values[1], 10) + (1 - a) * 255)
  const b = Math.floor(a * parseInt(values[2], 10) + (1 - a) * 255)
  return `#${`0${r.toString(16)}`.slice(-2)}${`0${g.toString(16)}`.slice(-2)}${`0${b.toString(16)}`.slice(-2)}`
}

const PaletteElement: VoidFunctionComponent<{ colors: WeightedColor }> = ({ colors }) => {
  const colorTuples: [WeightedColorKey] = Object.entries(colors)
  return (
    <>
      {colorTuples.map(([weight, backgroundColor]) => {
        const isLight =
          getLuminance(backgroundColor.startsWith('rgba') ? hexify(backgroundColor) : backgroundColor) >= 0.3

        return (
          <div>
            <div
              style={{
                backgroundColor,
                width: '100%',
                height: 48,
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                padding: 8,
              }}
            >
              <p style={{ color: isLight ? 'black' : 'white' }}>{weight}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export const Colors: VoidFunctionComponent<{}> = () => {
  const palette = Object.entries(colorList.palette)
  return (
    <Grid>
      {palette.map(([colorName, colors]) => (
        <div>
          <h1>{colorName}</h1>
          <PaletteElement colors={colors} />
        </div>
      ))}
    </Grid>
  )
}
