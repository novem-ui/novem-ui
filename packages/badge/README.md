
# @novem-ui/badge


## Usage

Both components have [SpacingProps](../base/src/spacing/README.md)

### `<Badge />`

The component has the following props:
- `baseColor` (Optional): It can be any color from the theme, uses `orange` by default.
- `size` (Optional): It can be `sm` or `lg`, uses `lg` by default. 
- `hierarchy` (Optional): It can be `loud` or `quiet`, uses `loud` by default. 

```tsx
import { Badge, ThemeProvider } from '@novem-ui/core'
// or
import { Badge } from '@novem-ui/badge'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Badge>
            Example badge
        </Badge>
    </ThemeProvider>
  )
}
```

### `<FeedbackBadge />`

The component has the following props:
- `variant` (Required): It can be `error` or `success`.


```tsx
import { FeedbackBadge, ThemeProvider } from '@novem-ui/core'
// or
import { FeedbackBadge } from '@novem-ui/badge'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <FeedbackBadge variant="success" />
    </ThemeProvider>
  )
}
```