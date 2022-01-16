# @novem-ui/message
## Usage
### `<Box />`

The component props are :
- `title` (Optional): A string that will be the message title
- `message` (Required)
- `onClose` (Optional): a function to handle the closing of the message component
- `variant` (Required): The style of the message, it can be `error` or `success`
- `action` (Optional): a JSX.Element that will handle anything you want
- `baseColor` (Optional): a prop to override the theme's default color. 

```tsx
import { Message, ThemeProvider } from '@novem-ui/core'
// or
import { Message } from '@novem-ui/message'
import { ThemeProvider } from '@novem-ui/theme'

function App() {
  return (
    <ThemeProvider>
      <Message message="a message"/>
    </ThemeProvider>
  )
}
```