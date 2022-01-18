# `@novem-ui/theme`

This package, together with @novem-ui/core, is one of the essential blocks to build any other package in the library.

`@novem-ui/theme` includes a set of tools to create and provide a theming interface to any component.

## Usage

### <ThemeProvider />

This component wraps a `React.Context` and provides theming. Receives a theme via props optionally.

```tsx
import { ThemeProvider } from "@novem-ui/core"

// ...

<ThemeProvider theme={theme}>
  {/* put your code here */}
</ThemeProvider>
```

### `useTheme`

This hook returns the current theme.

```tsx
import { useTheme } from "@novem-ui/core"

const Component = () => {
  const theme = useTheme()

  return <div style={{ color: theme.colors.pallete.red["300"] }}>
}
```

### `createColorMap`

A function that creates a map with weighted colors from 50 to 900, works better with colors with at least 50% luminosity and 50% saturation

```tsx
const orangeColorMap = createColorMap("rgb(241, 105, 75)")

/*
  {
    "50": "...",
    "100": "...",
    "200": "...",
    "300": "...",
    "400": "...",
    "500": "...",
    "600": "...",
    "700": "...",
    "800": "...",
    "900": "...",
  }
*/
```
