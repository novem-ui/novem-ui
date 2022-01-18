# @novem-ui/layout

## Usage

### `<Box />`

The component props are composed by [`BorderProps & BackgroundProps & LayoutProps`](../base/src/types.ts) & [SpacingProps](../base/src/spacing/README.md) & [ShadowProps](../base/src/shadows/index.ts)

You can use any color of the palette in the color props by doing <color>.<weight>.
The color can be any from the theme, and the valid weights are `50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900`

```tsx
import { Box, ThemeProvider } from '@novem-ui/core'
// or
import { Box } from '@novem-ui/layout'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
      <Box backgroundColor="red.300" />
    </ThemeProvider>
  )
}
```

### `<Flex />`

It's the same as Box but includes [`FlexProps`](../base/src/types.ts)

```tsx
import { Flex, ThemeProvider } from '@novem-ui/core'
// or
import { Flex } from '@novem-ui/layout'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
      <Flex align="center" justify="left" />
    </ThemeProvider>
  )
}
```
