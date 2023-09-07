import { Exemplo } from '../Exemplo'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Exemplo',
  component: Exemplo
} as Meta

type Story = StoryObj<typeof Exemplo>

export const Basic: Story = {
  args: {
    title: 'Exemplo V1'
  }
}
