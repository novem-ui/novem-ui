import React, { ReactChild } from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import { NovemProvider, theme } from '@novem-ui/core'

import TooltipBubble, { TooltipBubbleProps } from './tooltip-bubble'
import Tooltip, { TooltipProps } from '.'

const tooltipSetup = (props: TooltipProps = {}) => {
  const result = render(
    <NovemProvider>
      <Tooltip {...props} />
    </NovemProvider>
  )
  return result
}

const bubbleSetup = (props: TooltipBubbleProps & { children?: ReactChild } = {}) => {
  const result = render(
    <NovemProvider>
      <TooltipBubble {...props} />
    </NovemProvider>
  )
  return result
}

describe('components/Tooltip', async () => {
  test('should work on mousover and mouseout', async () => {
    const title = 'Tooltip Title'
    const message = 'message'
    const { container, queryByText } = tooltipSetup({ title, message })

    const tooltipTrigger = container.querySelector("[data-novem='tooltip-trigger']")

    act(() => {
      fireEvent(tooltipTrigger, new MouseEvent('mouseover', { bubbles: true }))
    })

    let tooltipText = queryByText(title)
    let tooltipMessage = queryByText(message)
    expect(tooltipText).toMatchSnapshot()
    expect(tooltipMessage).toMatchSnapshot()

    act(() => {
      fireEvent(tooltipTrigger, new MouseEvent('mouseout', { bubbles: true }))
    })

    tooltipText = queryByText(title)
    tooltipMessage = queryByText(message)

    expect(tooltipText).toBeFalsy()
    expect(tooltipMessage).toBeFalsy()
  })
})

describe('components/TooltipBubble', async () => {
  test('should use the default theme bg', async () => {
    const { container } = bubbleSetup({ position: 'center', children: <p>asd</p>, variant: 'theme' })

    expect(container.firstChild).toHaveStyle({ 'background-color': theme.colors.palette.orange[500] })
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should use the default system color bg', async () => {
    const { container } = bubbleSetup({ position: 'center', children: <p>asd</p>, variant: 'color-scheme' })

    expect(container.firstChild).toHaveStyle({ 'background-color': 'white' })
  })

  test('should be aligned to the center', async () => {
    const { container } = bubbleSetup({ position: 'center' })

    expect(container.firstChild).toHaveStyle({ transform: 'translate(calc(-50% + 1rem), calc(-90%))' })
  })

  test('should be aligned to the left', async () => {
    const { container } = bubbleSetup({ position: 'left' })

    expect(container.firstChild).toHaveStyle({ transform: 'translate(-1rem, calc(-90%))' })
  })

  test('should be aligned to the right', async () => {
    const { container } = bubbleSetup({ position: 'right' })

    expect(container.firstChild).toHaveStyle({ transform: 'translate(calc(-100% + 1.9rem), calc(-90%))' })
  })
})
