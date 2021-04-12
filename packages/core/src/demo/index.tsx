import * as React from 'react'
import DemoComponentTypes from './types'

const DemoComponent: React.FunctionComponent<DemoComponentTypes> = ({ text }) => <div>{text}</div>

export default DemoComponent
