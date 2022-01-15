# @novem-ui/checkbox

## Usage

### `<Input />`

The component has the following props, plus [SpacingProps](../base/src/spacing/README.md) and all the expected props from the native <input />:

- `baseColor` (Optional): It can be any color from the theme, uses `orange` by default.
- `error` (Optional): It can be a `boolean`, a `string` or a `new Error`, just changes the color to red, doesnt show a message.
- `valid` (Optional): `boolean`.

```tsx
import { Input, ThemeProvider } from '@novem-ui/core'
// or
import { Input } from '@novem-ui/input'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
      <Input type="number" />
    </ThemeProvider>
  )
}
```

### `<TextField />`

The component has the following props, plus [SpacingProps](../base/src/spacing/README.md) and all the expected props from the native <input />:

- `baseColor` (Optional): It can be any color from the theme, uses `orange` by default.
- `error` (Optional): It can be a `boolean`, a `string` or a `new Error`.
- `valid` (Optional): `boolean`
- `label` (Optional): A string show as a label tied to the input.
- `helper` (Optional): A string show as a helper.
- `count` (Optional) A boolean to enable character count.
- `readOnly` (Optional) A boolean to set the input as read only (style is different from disabled).

```tsx
import { TextField, ThemeProvider } from '@novem-ui/core'
// or
import { TextField } from '@novem-ui/input'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
      <Textfield value="A value" helper="Some helper text" />
    </ThemeProvider>
  )
}
```

### `<Dropdown />`

The component has the following props, plus [SpacingProps](../base/src/spacing/README.md) and all the expected props from the native <input />:

- `baseColor` (Optional): It can be any color from the theme, uses `orange` by default.
- `error` (Optional): It can be a `boolean`, a `string` or a `new Error`.
- `label` (Optional): A string show as a label tied to the input.
- `helper` (Optional): A string show as a helper.
- `readOnly` (Optional) A boolean to set the input as read only (style is different from disabled).

```tsx
import { Dropdown, Option, ThemeProvider } from '@novem-ui/core'
// or
import { Dropdown, Option } from '@novem-ui/input'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
        <Dropdown value="A value" helper="Some helper text">
          <Option value="1">
            Option 1
          </Option>
          <Option value="2">
            Option 2
          </Option>
        </Dropdown>
    </ThemeProvider>
  )
}
```
