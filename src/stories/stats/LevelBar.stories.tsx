import type { Meta, StoryObj } from '@storybook/react'
import LevelBar from '@/components/shared/stats/LevelBar'

const meta: Meta<typeof LevelBar> = {
  title: 'Stats/LevelBar',
  component: LevelBar,
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

type Story = StoryObj<typeof LevelBar>

export const LevelBlock: Story = {
  args: {
    level: 15,
    maxLevelPoints: 100,
    currentPoints: 100,
  },
}
