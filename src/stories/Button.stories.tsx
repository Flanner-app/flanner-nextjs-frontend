import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/shared/Button'

const meta: Meta<typeof Button> = {
  title: 'Basic components/Button',
  component: Button,
  // this component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // more on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
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
