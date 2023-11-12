import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/shared/Button'

const meta: Meta<typeof Button> = {
  title: 'Basic components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Button>

export const RegularButton: Story = {
  args: {
    size: 'M',
    appearence: 'yellow',
    children: 'Click me!',
  },
}
