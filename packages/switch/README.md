# @novem-ui/switch

## Usage

### `<Switch />`

The component has the following props, plus [SpacingProps](../base/src/spacing/README.md) and all the expected props from the native` <input type="checkbox" />`:

- `baseColor` (Optional): It can be any color from the theme, uses `orange` by default.

```tsx
import { Switch, ThemeProvider } from '@novem-ui/core'
// or
import Switch from '@novem-ui/switch'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Switch selected>
    </ThemeProvider>
  )
}
```
