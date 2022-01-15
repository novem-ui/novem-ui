
# @novem-ui/badge


## Usage

### `<Button />`

The component has the following props, plus `SpacingProps` and all the expected props from the native <button />:
- `baseColor` (Optional): It can be any color from the theme, uses `orange` by default.
- `size` (Optional): It can be `sm` or `lg`, uses `lg` by default. 
- `hierarchy` (Optional): It can be `loud`, `quiet`, or `link`, uses `loud` by default. 

```tsx
import { Button, ThemeProvider } from '@novem-ui/core'
// or
import { Button } from '@novem-ui/button'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Button>
            Example button
        </Badge>
    </ThemeProvider>
  )
}
```