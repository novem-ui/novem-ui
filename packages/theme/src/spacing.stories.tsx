import React, { VoidFunctionComponent } from 'react'
import { Meta } from '@storybook/react'
import colors from './colors'
import spacing from './spacing'

export default {
  title: 'Theme/Spacing',
} as Meta

const SpacingRuler: VoidFunctionComponent<{ size: string; keyName: string }> = ({ size, keyName }) => {
  return (
    <div style={{ display: 'flex' }}>
      <span style={{ width: '130px', fontSize: 14 }}>
        {keyName}: ({size})
      </span>
      <div style={{ width: size, height: '1rem', backgroundColor: colors.palette.red[100], marginBottom: '.5rem' }} />
    </div>
  )
}

export const Spacing: VoidFunctionComponent<{}> = () => {
  const spacingValues = Object.entries(spacing).sort(([a], [b]) => Number(a) - Number(b))
  return (
    <>
      {spacingValues.map(([key, size]) => (
        <SpacingRuler keyName={key} size={`${size}rem`} />
      ))}
    </>
  )
}
