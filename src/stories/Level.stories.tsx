import type { Meta, StoryObj } from '@storybook/react'
import Level from '@/components/shared/stats/Level'

const meta: Meta<typeof Level> = {
  title: 'Stats/Level',
  component: Level,
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

type Story = StoryObj<typeof Level>

export const LevelBlock: Story = {
  args: {},
}
