# @novem-ui/tooltip

## Usage

### `<Tooltip />`

The component has the following props:

- `title`: Tooltip title.
- `message` (Optional): Body of the tooltip, can be any ReactElement.
- `variant` (Optional): 'color-scheme' (adapts to dark or light theme) or 'theme' (the base color of the theme).
- `position` (Optional): It can be `left`, `center`or`right`, it's `center` by default.
- `baseColor` (Optional): change the tooltip color when using the "theme" variant

```tsx
import { Tooltip, ThemeProvider } from '@novem-ui/core'
// or

import { Tooltip } from '@novem-ui/tooltip'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        <Tooltip title="this is a tooltip">Quisquam</Tooltip> at porro aliquid. Aliquid, eaque quidem. Delectus aliquid ducimus
        fugiat neque?
      </p>
    </ThemeProvider>
  )
}
```
