import type { Preview } from '@storybook/react'
import withStateProviders from './widthStateProviders'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [withStateProviders]
}

export default preview
