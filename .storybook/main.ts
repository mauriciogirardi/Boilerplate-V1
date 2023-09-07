import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: (config) => {
    config?.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
