# @novem-ui/text

## Usage

### `<Paragraph />`

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

### `<Heading />`

The component has the following props, plus [TypographyProps](../base/src/types.ts):

- `as` (Optional): It can be any tag from `h1` to `h6`, it's `h1` by default.
- `size` (Optional): It can be `xs`, `sm`, `md`, `lg`, `xl` or `xxl`

```tsx
import { Heading, ThemeProvider } from `@novem-ui/core'
// or
import { Heading } from '@novem-ui/text'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Heading as="h3" size="xl" color="red.300" >
          Heading content
        </Heading>
    </ThemeProvider>
  )
}
```

### `<Label />`

The component has the following props, plus [TypographyProps](../base/src/types.ts):

- `size` (Optional): It can be `xs`, `sm`, `md` or `lg`

```tsx
import { Heading, ThemeProvider } from `@novem-ui/core'
// or
import { Heading } from '@novem-ui/text'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Label size="xl" color="red.300" for="id">
          Label content
        </Label>
    </ThemeProvider>
  )
}
```