import { addParameters } from '@storybook/client-api';
import NovemProvider from '../packages/core/src/novem-provider'

addParameters({
  viewMode: 'docs',
});

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
