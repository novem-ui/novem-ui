# @novem-ui/checkbox

## Usage

### `<Button />`

The component has the following props, plus `SpacingProps` and all the expected props from the native <input type="checkbox" />:

- `baseColor` (Optional): It can be any color from the theme, uses `orange` by default.

```tsx
import { Checkbox, ThemeProvider } from '@novem-ui/core'
// or
import Checkbox from '@novem-ui/checkbox'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Checkbox selected>
    </ThemeProvider>
  )
}
```
