# @novem-ui/avatar

## Usage

### `<Avatar />`

The component has the following props, plus [TypographyProps](../base/src/types.ts):

- `as` (Optional): It can be `p`, `strong`, `span`, `mark`, `ins`, `del`, `sup`, `small`, `i` or `b`, it's `p` by default.
- `size` (Optional): It can be `xs`, `sm`, `md` or `lg`.

```tsx
import { Paragraph, ThemeProvider } from `@novem-ui/core'
// or
import { Paragraph } from '@novem-ui/text'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Paragraph as="span" size="sm" color="red.300" >
          Text content
        </Paragraph>
    </ThemeProvider>
  )
}
```
