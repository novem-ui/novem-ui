import NovemProvider from '../packages/core/src/novem-provider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <NovemProvider>
      <Story />
    </NovemProvider>
  ),
]
