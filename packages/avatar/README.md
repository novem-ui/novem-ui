# @novem-ui/avatar

## Usage

### `<Avatar />`

The component has the following props:

- `image` (Optional): An image source.
- `name` (Optional): A name or full name.
- `description` (Optional): Subject description.
- `size` (Optional): It can be `sm`, `md`or`lg`.

```tsx
import { Avatar, ThemeProvider } from `@novem-ui/core'
// or
import { Avatar } from '@novem-ui/avatar'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Avatar size="sm" image="http://cat.pic" name="Michi" description="Cute"/>
    </ThemeProvider>
  )
}
```
